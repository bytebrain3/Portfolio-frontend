import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@components/Card.jsx';
import Input from '@ui/Input.jsx';
import Button from "@ui/Button.jsx";
import ThemeToggle from "@ui/ThemeToggle.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axiosInstance from '@/axiosInstance';
import { DrawerComponent, DrawerContent, DrawerHeader, DrawerFooter } from '@ui/Drawer.jsx';
import OtpValueInput from "@ui/OtpInput.jsx";

const Login = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [otp, setOtp] = useState('');

	// Handle OTP change from child component
	const handleOtpChange = (value) => {
		setOtp(value);
		console.log("Current OTP:", value);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Check local storage for OTP verification status
	useEffect(() => {
		setIsOpen(localStorage.getItem("Verify-otp") === "true");
	}, [isOpen]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setIsLoading(true);

		const { email, username, password } = formData;

		if (!email || !username || !password) {
			setError('Please enter your email, username, and password.');
			setIsLoading(false);
			return;
		}

		try {
			const response = await axiosInstance.post('api/v1/auth/admin/login', formData);
			if (response.data.success) {
				toast.success(`${response.data.message} Please verify the OTP`);
				console.log("Please verify the OTP");
				console.log(response.data.otp);
				setIsOpen(true);
				localStorage.setItem("Verify-otp", "true");
			}
		} catch (err) {
			console.error(err);
			setError(err.response?.data?.message || 'Login failed. Please try again.');
			toast.error(err.message === "Network Error" ? 'Network Error. Please try again.' : 'Login failed. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleVerifyOtp = async () => {
		setIsLoading(true);

		// Check if OTP length is exactly 6 digits
		if (otp.length !== 6) {
		 // Check if OTP length is exactly 6 digits
			toast.error("OTP should be 6 digits");
			setIsLoading(false); // reset loading if OTP length is invalid
			return;
		}
		try {
			const response = await axiosInstance.post('api/v1/auth/admin/verify-otp', { otp });

			if (response.data.success) {
				toast.success(response.data.message);
				setIsOpen(false); // Close the OTP modal
				localStorage.removeItem("Verify-otp"); // Clear OTP from localStorage
				console.log(response.data.username);
			}
		} catch (err) {
			const errorMessage = err.message === "Network Error" 
				? 'Network Error. Please try again.' 
				: 'Verification failed. Please try again.';
			toast.error(errorMessage);
			console.log(err)
		} finally {
			setIsLoading(false); // Always reset loading status
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-zinc-800 p-4 relative">
			<ToastContainer position="top-right" autoClose={5000} theme="dark" />
			<ThemeToggle className="fixed top-6 right-4" />
			<Card className="max-w-md w-full">
				<CardHeader title="Admin Login" description="Please log in with your admin credentials." className="text-center" />
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<Input
							type="text"
							name="username"
							
							placeholder="Username"
							label="Username *"
							variant="secondary"
							value={formData.username}
							onChange={handleChange}
						/>
						<Input
							type="email"
							name="email"
							
							placeholder="Email"
							label="Email *"
							variant="secondary"
							value={formData.email}
							onChange={handleChange}
						/>
						<Input
							type="password"
							name="password"
							
							placeholder="Password"
							label="Password"
							variant="secondary"
							value={formData.password}
							onChange={handleChange}
						/>
					</form>
				</CardContent>
				<CardFooter>
					<Button
						type="submit"
						variant="dark"
						className="w-full"
						onClick={handleSubmit}
						disabled={isLoading}
						loading={isLoading}
					>
						Login
					</Button>
				</CardFooter>
			</Card>

			{/* Drawer for OTP Verification */}
			<DrawerComponent isOpen={isOpen} onClose={() => setIsOpen(false)}>
				<DrawerContent>
					<DrawerHeader
						title="Verify OTP"
						description="Verify Your Login To Secure Admin Account"
					/>
					<Card className="space-y-5 font-extrabold">
						<OtpValueInput onChangeOtp={handleOtpChange} />
						<Button
							onClick={handleVerifyOtp}
							variant="dark"
							className="w-full"
							loading={isLoading}
						>
							Verify
						</Button>
					</Card>
					<DrawerFooter className="font-extrabold" onClose={() => setIsOpen(false)} />
				</DrawerContent>
			</DrawerComponent>
		</div>
	);
};

export default Login;
