import React from 'react'
import SearchMobile from '../components/SearchMobile'
import Info from '../components/Info'
import HumbuergerLogo from '../components/HamburgerLogo'
// const Header = ({ toggleMenu }: { toggleMenu: (arg0: any) => void }) 
const SidebarHeader = () => {
    return (
        <div className="flex justify-between">
            <a className="flex" href="#">
                <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                    <defs />
                    <circle cx="32" cy="32" r="32" fill="#303354" />
                    <path fill="#fff" d="M27.492 48.24c-.208 0-.332-.007-.356-.009a1.947 1.947 0 01-1.822-2.064c.066-1.074.994-1.9 2.064-1.822.012-.002 2.36.1 4.986-1.213a1.948 1.948 0 011.741 3.482c-2.958 1.48-5.662 1.626-6.613 1.626z" />
                    <path fill="#fff" d="M21.973 48.23c-4.928 0-8.937-4.008-8.937-8.936v-8.27c0-4.928 4.009-8.937 8.937-8.937h19.395c4.927 0 8.937 4.01 8.937 8.937a1.947 1.947 0 01-3.894 0 5.048 5.048 0 00-5.043-5.043H21.973a5.048 5.048 0 00-5.043 5.043v8.27a5.048 5.048 0 005.043 5.043 1.947 1.947 0 010 3.894zM28.514 19.916a1.569 1.569 0 01-1.569-1.569.993.993 0 00-1.983 0 1.569 1.569 0 01-3.137 0 4.133 4.133 0 014.129-4.128 4.133 4.133 0 014.128 4.129c0 .866-.702 1.568-1.568 1.568zM38.754 19.916a1.569 1.569 0 01-1.568-1.569.993.993 0 00-1.984 0 1.568 1.568 0 01-3.137 0 4.133 4.133 0 014.129-4.128 4.133 4.133 0 014.128 4.129c0 .866-.702 1.568-1.568 1.568z" />
                    <path fill="#666FE4" d="M42.795 36.812a3.128 3.128 0 00-3.124 3.124 3.128 3.128 0 003.124 3.124 3.128 3.128 0 003.124-3.124 3.128 3.128 0 00-3.124-3.124zm0 9.613a6.496 6.496 0 01-6.489-6.489 6.496 6.496 0 016.489-6.489 6.496 6.496 0 016.489 6.489 6.496 6.496 0 01-6.489 6.489z" />
                    <path fill="#fff" d="M31.482 34.431c-2.026 0-4.237-.409-6.296-1.644a1.714 1.714 0 011.763-2.94c4.376 2.625 10.222-.054 10.28-.081a1.716 1.716 0 012.279.822 1.712 1.712 0 01-.815 2.278c-.2.094-3.372 1.565-7.211 1.565z" />
                </svg>
                <svg className="w-24 h-16 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 112 38">
                    <defs />
                    <path fill="#fff" d="M12.8 17.256a4.9 4.9 0 01-2.824.862c-1.04 0-1.98-.287-2.818-.862a4.824 4.824 0 01-1.808-2.269L1.159 4.573A3.202 3.202 0 01.955 3.45c0-.844.291-1.561.875-2.153A2.874 2.874 0 013.957.407c.656 0 1.253.195 1.79.582.536.387.902.884 1.098 1.488l3.131 9.444 3.143-9.444A2.915 2.915 0 0114.212.99a2.957 2.957 0 011.783-.582c.834 0 1.55.299 2.146.895a2.93 2.93 0 01.895 2.147c0 .315-.082.69-.243 1.124l-4.178 10.414a4.814 4.814 0 01-1.815 2.269zM26.852 12.35c.754.805 1.727 1.208 2.92 1.208 1.192 0 2.168-.403 2.926-1.208.759-.805 1.138-1.833 1.138-3.086 0-1.252-.38-2.28-1.138-3.086-.758-.805-1.734-1.207-2.926-1.207-1.193 0-2.166.402-2.92 1.207s-1.13 1.834-1.13 3.086c0 1.253.376 2.281 1.13 3.086zm2.92 6.179c-1.235 0-2.387-.159-3.456-.474-1.07-.314-2.005-.755-2.805-1.322a9.14 9.14 0 01-2.064-2.006 8.552 8.552 0 01-1.304-2.55 9.595 9.595 0 01-.44-2.913c0-1.014.146-1.985.44-2.913a8.552 8.552 0 011.304-2.55 9.145 9.145 0 012.064-2.006c.8-.566 1.735-1.007 2.805-1.322C27.385.157 28.536 0 29.772 0c1.534 0 2.94.243 4.217.728 1.278.486 2.34 1.148 3.188 1.987a8.936 8.936 0 011.974 2.946 9.285 9.285 0 01.703 3.603c0 1.278-.235 2.48-.703 3.604a8.937 8.937 0 01-1.974 2.945c-.848.839-1.91 1.502-3.188 1.987-1.278.486-2.683.729-4.217.729zM47.583 12.902h2.466c1.125 0 2.047-.313 2.767-.94.72-.626 1.08-1.517 1.08-2.676 0-1.15-.362-2.043-1.086-2.677-.724-.635-1.645-.952-2.76-.952h-2.467v7.245zm-3.245 4.97c-.887 0-1.566-.236-2.039-.708-.472-.473-.709-1.153-.709-2.038V3.433c0-.886.237-1.567.71-2.044.472-.477 1.151-.716 2.038-.716h6.516c2.803 0 5.005.775 6.607 2.326 1.601 1.55 2.402 3.646 2.402 6.287 0 2.64-.8 4.732-2.402 6.274-1.602 1.542-3.804 2.313-6.607 2.313h-6.516zM5.071 22.435c.849-.11 4.68-.328 5.938 1.614.41.575.63 1.232.356 1.916-.247.657-.767 1.177-1.505 1.204-1.34.055-2.053-.903-3.503-1.287-.547-.164-.848 0-1.067.247a.778.778 0 00-.082.848c.383.712 1.916 1.095 2.517 1.26l.493.136c1.697.52 3.42.848 4.05 2.928.465 1.368.082 3.31-.903 4.597-1.533 1.86-4.269 2.161-5.774 2.025-1.423-.11-4.241-1.068-5.226-2.846-.383-.711-.52-1.56-.137-2.298.355-.658.848-1.04 1.56-1.095 1.532-.11 1.888 1.095 3.612 2.106.574.274 1.395.576 2.052.247.41-.164.684-.657.712-1.04.027-.274-.11-.739-.52-.93-.657-.274-4.242-.848-5.802-2.49-1.04-1.068-1.176-2.71-.766-3.968.657-2.052 2.107-2.928 3.995-3.174zM17.864 29.807l5.582-2.354c-.245-.711-2.161-1.203-3.502-.656-1.286.547-2.162 1.833-2.08 3.01zm8.264 6.485c-1.505 1.286-3.968 1.642-5.226 1.642-4.27 0-7.416-3.886-7.389-8.154.028-4.488 3.667-7.443 8.128-7.443 2.873 0 4.077 1.067 5.116 2.27.602.74 1.04 1.724 1.232 2.71.274 1.505-.739 1.97-1.013 2.08l-7.99 3.174c1.45 1.368 2.408 1.751 3.749.985.466-.274.657-.493.958-.712 1.067-.903 2.162-.766 2.928.082.766.876.793 1.998 0 2.9-.192.192-.301.302-.493.466zM32.662 32.496a2.138 2.138 0 002.08 2.189c1.15.027 2.162-.876 2.19-2.08.027-1.15-.904-2.162-2.08-2.19-1.177-.026-2.162.932-2.19 2.08zm1.341 5.39c-2.955.246-5.582-1.943-5.8-4.925-.247-2.956 1.97-5.555 4.87-5.801 1.204-.055 2.654.356 3.776.93 0-.903.11-1.697-.657-2.134-1.313-.767-2.709-.274-3.967.492-.74.41-1.697.165-2.08-.575-.438-.765-.054-1.75.52-2.161.711-.547.957-.739 1.833-1.012 1.697-.548 5.118-.657 6.95.984 1.697 1.424 1.67 4.379 1.642 5.583v5.227c-.027.93.192 2.298-1.121 3.146-.52.328-1.286.438-1.943.137-.329-.164-.603-.465-1.095-1.122-.82.52-1.86 1.122-2.928 1.231zM51.069 22.446c1.095.246 1.532 1.286 1.532 2.162 0 .793-.273 1.834-1.176 2.38-.657.356-1.697.493-2.572.055-.849-.41-1.177-.601-1.642-.41-.575.246-.492.766-.492 1.778v7.58c0 .876-.904 1.943-2.08 1.943-1.15 0-2.135-1.067-2.135-1.943v-11.93c0-1.04.985-1.724 2.135-1.724 1.176 0 1.997.274 2.107 1.23 1.121-.956 2.763-1.422 4.323-1.12zM59.145 22.43c1.806-.247 4.816.191 6.568 2.08.656.683.82 1.367.656 2.078-.192.63-.684 1.396-1.395 1.643-1.123.41-1.56-.301-2.82-1.095-.984-.575-2.298-.656-3.392-.273-1.122.383-2.162 1.724-2.162 2.708 0 1.04.165 2.19 1.286 3.202.876.82 2.026 1.095 3.202.82.547-.136.93-.355 1.56-.82.684-.52 1.067-.711 1.587-.766.63-.055 1.34.328 1.806.985.383.52.492 1.368.219 1.97-.603 1.478-3.175 2.6-4.379 2.819-2.052.437-4.925.11-7.114-2.08s-2.654-4.87-2.244-6.977c.465-2.354 1.888-4.68 4.68-5.802a7.047 7.047 0 011.942-.492zM81.273 36.035c0 .876-.958 1.916-2.108 1.916-1.204 0-2.134-1.04-2.134-1.916v-5.062c0-.958.11-3.283-1.369-4.214-.601-.329-1.668-.41-2.517.055-1.56.985-1.395 2.572-1.395 3.858v5.363c0 .876-.93 1.916-2.08 1.916-1.204 0-2.134-1.04-2.134-1.916V17.893c0-1.04.93-1.696 2.134-1.696 1.259 0 2.08.684 2.08 1.696v4.953c1.56-.602 4.816-.82 6.54.192 2.27 1.313 2.983 3.72 2.983 5.965v7.032zM85.576 32.361c1.56.028 2.764 1.314 2.764 2.846 0 1.505-1.286 2.737-2.874 2.736-1.532 0-2.763-1.313-2.736-2.845.028-1.532 1.34-2.764 2.846-2.737zM94 26.502v9.495c0 .876-.958 1.943-2.107 1.943-1.177 0-2.135-1.067-2.135-1.943v-9.495h-.438c-1.067 0-1.997-.876-1.997-1.97 0-1.067.876-1.97 1.943-1.97h.492v-2.955c0-.958.958-1.971 2.135-1.971 1.15 0 2.107 1.013 2.107 1.97v2.955h1.149c1.067 0 1.943.904 1.943 1.97 0 1.095-.93 1.971-1.998 1.971H94z" />
                    <path fill="#fff" d="M106.702 35.099c-.684 1.67-1.204 2.846-2.955 2.846-1.724 0-1.888-1.067-2.818-3.065l-4.105-9.769c-.41-1.04-.192-2.107.876-2.572 1.012-.41 2.325-.246 2.818.958l3.366 7.962 3.365-7.99c.466-1.176 1.807-1.259 2.847-.957 1.121.355 1.34 1.422.875 2.545l-4.269 10.042z" />
                </svg>
            </a>
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 ease-in-out rounded-full cursor-pointer lg:hidden bg-primary-800 hover:bg-indigo-800">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18">
                    <defs />
                    <rect width="24" height="4" fill="#fff" rx="2" />
                    <rect width="24" height="4" y="7" fill="#fff" rx="2" />
                    <rect width="24" height="4" y="14" fill="#fff" rx="2" />
                </svg>
            </div>
        </div>
    )
}

export default SidebarHeader