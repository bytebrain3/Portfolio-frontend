import React from 'react'
import CreateContent from "@admin/CreateContent.jsx"
import EditContent from "@admin/EditContent.jsx"
const Admin = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start text-black dark:text-white dark:bg-black p-2 lg:p-4">
      <CreateContent />
    </div>
  )
}

export default Admin