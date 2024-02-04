const TechStack = ({ techStack, theme }) => {
  const buttonStyle = `m-2 py-2 px-4 rounded font-bold transition-colors duration-300 ease-in-out flex items-center justify-center text-sm`

  return (
    <div className="flex flex-wrap items-center justify-center w-full">
      {techStack.map((tech, index) => (
        <a
          key={index}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonStyle} ${
            theme === 'dark'
              ? 'bg-blue-500 hover:bg-blue-700 text-white'
              : 'bg-blue-200 hover:bg-blue-400 text-blue-900'
          }`}
        >
          {tech.name}
        </a>
      ))}
    </div>
  )
}

export default TechStack
