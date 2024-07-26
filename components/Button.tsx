import React from 'react'

const Button = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
}:{
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
  }) => {
  return (
    
        // Button code
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border gap-2
          border-Brown bg-[linear-gradient(110deg,#0E0E0E,45%,#302424,55%,#0E0E0E)] bg-[length:200%_100%] px-4 font-medium text-Brown transition-colors focus:outline-none focus:ring-2 focus:ring-Brown focus:ring-offset-2 focus:ring-offset-Brown"
              onClick={handleClick}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      {/* </span> */}
    </button>
      
  )
}

export default Button
