<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Webcrumbs Plugin</title>
        <style>
            @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
            @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
        </style>
    </head>
    <body>
        <div id="webcrumbs">
            <div class="min-h-screen bg-gray-900 text-white">
                <header class="bg-gray-800 shadow-md py-4 px-6">
                    <div class="flex justify-between items-center">
                        <h1 class="text-xl font-bold text-white hover:text-purple-400 transition duration-300">
                            Quizify
                        </h1>
                        <nav>
                            <ul class="flex space-x-6">
                                <li>
                                    <a
                                        href="https://webcrumbs.cloud/placeholder"
                                        class="hover:text-purple-400 transition duration-300"
                                        >Home</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://webcrumbs.cloud/placeholder"
                                        class="hover:text-purple-400 transition duration-300"
                                        >About</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://webcrumbs.cloud/placeholder"
                                        class="hover:text-purple-400 transition duration-300"
                                        >Contact</a
                                    >
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <main class="container mx-auto px-4 py-12 flex flex-col items-center">
                    <h2 class="text-2xl font-semibold mb-8">Enter YouTube Link</h2>
                    <div class="flex w-full max-w-lg mb-16">
                        <input
                            type="text"
                            placeholder="Paste YouTube URL here..."
                            class="bg-gray-800 text-white py-2 px-4 rounded-l flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                        />
                        <button
                            class="bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-r transform hover:scale-105 transition duration-300"
                        >
                            Generate
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                        <div
                            class="bg-gray-800 bg-opacity-60 rounded-lg p-8 flex flex-col items-center hover:bg-gray-700 transform hover:scale-105 transition duration-300 border border-transparent hover:border-purple-500"
                        >
                            <svg
                                class="w-12 h-12 text-purple-500 mb-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <h3 class="text-lg font-medium mb-2">Summary</h3>
                        </div>
                        <div
                            class="bg-gray-800 bg-opacity-60 rounded-lg p-8 flex flex-col items-center hover:bg-gray-700 transform hover:scale-105 transition duration-300 border border-transparent hover:border-purple-500"
                        >
                            <svg
                                class="w-12 h-12 text-purple-500 mb-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <h3 class="text-lg font-medium mb-2">Questions</h3>
                        </div>
                        <div
                            class="bg-gray-800 bg-opacity-60 rounded-lg p-8 flex flex-col items-center hover:bg-gray-700 transform hover:scale-105 transition duration-300 border border-transparent hover:border-purple-500"
                        >
                            <svg
                                class="w-12 h-12 text-purple-500 mb-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <h3 class="text-lg font-medium mb-2">Notes</h3>
                        </div>
                    </div>
                </main>
            </div>
        </div>

        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                content: ["./src/**/*.{html,js}"],
                theme: {
                    name: "Bluewave",
                    fontFamily: {
                        sans: [
                            "Open Sans",
                            "ui-sans-serif",
                            "system-ui",
                            "sans-serif",
                            '"Apple Color Emoji"',
                            '"Segoe UI Emoji"',
                            '"Segoe UI Symbol"',
                            '"Noto Color Emoji"'
                        ]
                    },
                    extend: {
                        fontFamily: {
                            title: [
                                "Lato",
                                "ui-sans-serif",
                                "system-ui",
                                "sans-serif",
                                '"Apple Color Emoji"',
                                '"Segoe UI Emoji"',
                                '"Segoe UI Symbol"',
                                '"Noto Color Emoji"'
                            ],
                            body: [
                                "Open Sans",
                                "ui-sans-serif",
                                "system-ui",
                                "sans-serif",
                                '"Apple Color Emoji"',
                                '"Segoe UI Emoji"',
                                '"Segoe UI Symbol"',
                                '"Noto Color Emoji"'
                            ]
                        },
                        colors: {
                            neutral: {
                                50: "#f7f7f7",
                                100: "#eeeeee",
                                200: "#e0e0e0",
                                300: "#cacaca",
                                400: "#b1b1b1",
                                500: "#999999",
                                600: "#7f7f7f",
                                700: "#676767",
                                800: "#545454",
                                900: "#464646",
                                950: "#282828"
                            },
                            primary: {
                                50: "#f3f1ff",
                                100: "#e9e5ff",
                                200: "#d5cfff",
                                300: "#b7a9ff",
                                400: "#9478ff",
                                500: "#7341ff",
                                600: "#631bff",
                                700: "#611bf8",
                                800: "#4607d0",
                                900: "#3c08aa",
                                950: "#220174",
                                DEFAULT: "#611bf8"
                            }
                        }
                    },
                    fontSize: {
                        xs: ["12px", {lineHeight: "19.200000000000003px"}],
                        sm: ["14px", {lineHeight: "21px"}],
                        base: ["16px", {lineHeight: "25.6px"}],
                        lg: ["18px", {lineHeight: "27px"}],
                        xl: ["20px", {lineHeight: "28px"}],
                        "2xl": ["24px", {lineHeight: "31.200000000000003px"}],
                        "3xl": ["30px", {lineHeight: "36px"}],
                        "4xl": ["36px", {lineHeight: "41.4px"}],
                        "5xl": ["48px", {lineHeight: "52.800000000000004px"}],
                        "6xl": ["60px", {lineHeight: "66px"}],
                        "7xl": ["72px", {lineHeight: "75.60000000000001px"}],
                        "8xl": ["96px", {lineHeight: "100.80000000000001px"}],
                        "9xl": ["128px", {lineHeight: "134.4px"}]
                    },
                    borderRadius: {
                        none: "0px",
                        sm: "6px",
                        DEFAULT: "12px",
                        md: "18px",
                        lg: "24px",
                        xl: "36px",
                        "2xl": "48px",
                        "3xl": "72px",
                        full: "9999px"
                    },
                    spacing: {
                        0: "0px",
                        1: "4px",
                        2: "8px",
                        3: "12px",
                        4: "16px",
                        5: "20px",
                        6: "24px",
                        7: "28px",
                        8: "32px",
                        9: "36px",
                        10: "40px",
                        11: "44px",
                        12: "48px",
                        14: "56px",
                        16: "64px",
                        20: "80px",
                        24: "96px",
                        28: "112px",
                        32: "128px",
                        36: "144px",
                        40: "160px",
                        44: "176px",
                        48: "192px",
                        52: "208px",
                        56: "224px",
                        60: "240px",
                        64: "256px",
                        72: "288px",
                        80: "320px",
                        96: "384px",
                        px: "1px",
                        0.5: "2px",
                        1.5: "6px",
                        2.5: "10px",
                        3.5: "14px"
                    }
                },
                plugins: [],
                important: "#webcrumbs"
            }
        </script>
    </body>
</html>
