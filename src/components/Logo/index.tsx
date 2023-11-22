import { useTheme } from "next-themes"

export function Logo() {
  const { theme, setTheme } = useTheme()
  function handleTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <strong className="flex mx-1 items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        width={31}
        height={35}
        viewBox="0 0 51 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"

      >
        <path
          d="M45.624 10.505L29.456 1.181a8.887 8.887 0 00-8.853 0L4.435 10.505A8.887 8.887 0 000 18.183v18.634c0 3.158 1.7 6.1 4.435 7.678l16.168 9.324a8.886 8.886 0 008.853 0l16.168-9.324a8.887 8.887 0 004.435-7.678V18.183c0-3.158-1.7-6.1-4.435-7.678zm.138 26.312a4.578 4.578 0 01-2.285 3.955L27.31 50.096a4.577 4.577 0 01-4.56 0L6.581 40.772a4.578 4.578 0 01-2.284-3.955V18.183c0-1.627.875-3.142 2.284-3.955L22.75 4.904a4.577 4.577 0 014.56 0l16.168 9.324a4.578 4.578 0 012.285 3.955v18.634z"
          fill="#445964"
        />
        <path
          d="M22.988 25.86l-7.98-6.753a2.148 2.148 0 10-2.775 3.28l6.04 5.113-6.04 5.112a2.15 2.15 0 002.775 3.281l7.98-6.753a2.15 2.15 0 000-3.28zM36.438 32.104h-9.667a2.149 2.149 0 000 4.297h9.667a2.149 2.149 0 000-4.297z"
          fill="#445964"
        />
      </svg>
      <span onClick={handleTheme}>BSVC☕DE</span>
    </strong>
  )
}

