<div className="min-h-screen bg-gray-900 text-white">
    <header className="bg-gray-800 shadow-md py-4 px-6">
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white hover:text-purple-400 transition duration-300">Quizify</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <a
                            href="https://webcrumbs.cloud/placeholder"
                            className="hover:text-purple-400 transition duration-300"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://webcrumbs.cloud/placeholder"
                            className="hover:text-purple-400 transition duration-300"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://webcrumbs.cloud/placeholder"
                            className="hover:text-purple-400 transition duration-300"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <main className="container mx-auto px-4 py-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-8">Enter YouTube Link</h2>

        <div className="flex w-full max-w-lg mb-16">
            <input
                type="text"
                placeholder="Paste YouTube URL here..."
                className="bg-gray-800 text-white py-2 px-4 rounded-l flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
            <button className="bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-r transform hover:scale-105 transition duration-300">
                Generate
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="bg-gray-800 bg-opacity-60 rounded-lg p-8 flex flex-col items-center hover:bg-gray-700 transform hover:scale-105 transition duration-300 border border-transparent hover:border-purple-500">
                <svg
                    className="w-12 h-12 text-purple-500 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"
                        fill="currentColor"
                    />
                </svg>
                <h3 className="text-lg font-medium mb-2">Summary</h3>
                {/* Next: "Add a short description about generating video summaries" */}
            </div>

            <div className="bg-gray-800 bg-opacity-60 rounded-lg p-8 flex flex-col items-center hover:bg-gray-700 transform hover:scale-105 transition duration-300 border border-transparent hover:border-purple-500">
                <svg
                    className="w-12 h-12 text-purple-500 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"
                        fill="currentColor"
                    />
                </svg>
                <h3 className="text-lg font-medium mb-2">Questions</h3>
                {/* Next: "Add a short description about generating quiz questions" */}
            </div>

            <div className="bg-gray-800 bg-opacity-60 rounded-lg p-8 flex flex-col items-center hover:bg-gray-700 transform hover:scale-105 transition duration-300 border border-transparent hover:border-purple-500">
                <svg
                    className="w-12 h-12 text-purple-500 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z"
                        fill="currentColor"
                    />
                </svg>
                <h3 className="text-lg font-medium mb-2">Notes</h3>
                {/* Next: "Add a short description about generating study notes" */}
            </div>
        </div>
    </main>
</div>
