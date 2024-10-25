import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import RawTool from '@editorjs/raw';
import Checklist from '@editorjs/checklist';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import CodeTool from '@editorjs/code';
import Table from '@editorjs/table';

const RichEditor = () => {
	const editorRef = useRef(null); 

	useEffect(() => {
		const initEditor = async () => {
			try {
				const editor = new EditorJS({
					holder: editorRef.current,
					autofocus: true,
					tools: {
						header: Header,
						list: List,
						raw: RawTool,
						quote: Quote,
						code: CodeTool,
						checklist: {
							class: Checklist,
							inlineToolbar: true,
						},
						table: {
							class: Table,
							inlineToolbar: true,
						},
						embed: {
							class: Embed,
							inlineToolbar: true,
							config: {
								services: {
									youtube: true,
									coub: true,
								},
							},
						},
					},
				});
				editorRef.current = editor;

				// Wait for the editor to be ready
				await editor.isReady; // Ensure editor is fully initialized
			} catch (error) {
				console.error('Failed to initialize Editor.js:', error);
			}
		};

		if (editorRef.current) {
			initEditor();
		} else {
			console.error('Editor.js element is missing or invalid');
		}

		// Cleanup on unmount
		return () => {
			if (editorRef.current && typeof editorRef.current.destroy === 'function') {
				editorRef.current.destroy();
				editorRef.current = null; // Clear the reference
			}
		};
	}, []); 

	const handleSave = async () => {
		if (!editorRef.current) {
			console.error('Editor instance is not initialized');
			return;
		}

		console.log('Current Editor Instance:', editorRef.current); // Debugging line

		try {
			const savedData = await editorRef.current.save();
			console.log('Saved Data: ', savedData);
		} catch (error) {
			console.error('Saving failed: ', error);
		}
	};

	return (
		<div className="w-full h-full flex flex-col items-center justify-center">
			<div ref={editorRef} className="min-w-full min-h-[400px] bg-neutral-50 text-black dark:bg-black dark:text-white prose"></div>
			<button
				onClick={handleSave}
				className="mt-4 p-2 bg-blue-500 text-white rounded"
			>
				Save
			</button>
		</div>
	);
};

export default RichEditor;
