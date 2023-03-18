import React from "react"

const PlusIcon = () => {
  return (
    <div className="flex items-start justify-center basis-1/12">
      <div className="relative h-6 w-6">
        <div className="h-[24px] w-[8px] bg-white absolute left-[8px]" />
        <div className="w-[24px] h-[8px] bg-white absolute top-[8px]" />
      </div>
    </div>
  )
}

export default PlusIcon
