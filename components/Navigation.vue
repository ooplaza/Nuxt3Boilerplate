<template>
    <div>
        <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64">
            <path fill="#fd3c4f" d="M35.501,48.997c-9.66,0-17.518-7.861-17.518-17.518c0-9.658,7.858-17.518,17.518-17.518	c4.104,0,8.091,1.447,11.232,4.074c0.098,0.083,0.218,0.113,0.325,0.178c0.155,0.095,0.303,0.198,0.47,0.258	c0.12,0.043,0.243,0.05,0.368,0.073c0.153,0.028,0.3,0.088,0.456,0.088c0.048,0,0.093-0.025,0.138-0.028	c0.098-0.005,0.19-0.038,0.288-0.055c0.223-0.04,0.438-0.088,0.646-0.185c0.083-0.04,0.148-0.103,0.225-0.15	c0.16-0.1,0.333-0.175,0.473-0.315l5.148-4.632c0.979-0.979,0.979-2.56,0-3.539s-2.56-0.979-3.539,0l-3.622,3.105	c-3.706-2.508-8.101-3.877-12.608-3.877c-10.351,0-19.09,7.022-21.714,16.553l-0.036-0.011L8.333,44.12	c-0.778,2.335-0.399,4.82,1.04,6.816c1.438,1.997,3.676,3.143,6.138,3.143h20.268v-0.091c9.531-0.15,17.241-7.94,17.241-17.504	c0-9.658-7.858-17.518-17.518-17.518c-6.9,0-12.513,5.613-12.513,12.513s5.613,12.513,12.513,12.513	c4.139,0,7.508-3.368,7.508-7.508c0-1.384-1.121-2.503-2.503-2.503c-1.381,0-2.503,1.119-2.503,2.503	c0,1.381-1.124,2.503-2.503,2.503c-4.139,0-7.508-3.368-7.508-7.508s3.368-7.508,7.508-7.508c6.9,0,12.513,5.613,12.513,12.513	S42.401,48.997,35.501,48.997z M13.429,48.014c-0.487-0.678-0.616-1.52-0.323-2.404l1.598-5.492c1.472,3.531,3.82,6.606,6.768,8.961	h-5.961C14.676,49.079,13.917,48.69,13.429,48.014z"></path><ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"></ellipse><path d="M52.301,31.556c-2.418,0.351-4.282,2.412-4.282,4.928c0,6.902-5.616,12.519-12.519,12.519 c-2.762,0-5,2.238-5,5c0,0.026,0.007,0.051,0.008,0.077h5.27v-0.091c9.531-0.15,17.241-7.94,17.241-17.504 C53.019,34.772,52.761,33.121,52.301,31.556z" opacity=".15"></path><path fill="#fff" d="M16.139,20.021c0.887,0.664,1.929,1.014,2.981,1.014c1.328,0,2.654-0.526,3.638-1.568 c0.068-0.072,0.144-0.133,0.213-0.204c0.184-0.189,0.379-0.367,0.571-0.548c0.242-0.227,0.482-0.456,0.734-0.668 c0.138-0.115,0.284-0.221,0.425-0.332c0.327-0.259,0.656-0.514,0.999-0.747c0.03-0.021,0.063-0.038,0.093-0.059 c2.85-1.915,6.187-2.953,9.709-2.953c2.571,0,4.664-1.948,4.944-4.444c-1.613-0.366-3.27-0.556-4.944-0.556 C27.267,8.955,20.066,13.406,16.139,20.021z" opacity=".3"></path><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M24.573,14.812c1.611-1.052,3.364-1.877,5.205-2.446"></path>
            </svg>
        </a>
        <div class="flex md:order-2">
            <button @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')" type="button" class="dark:text-white bg-gray-300 hover:bg-gray-400 focus:ring-transparent focus:outline-white focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 text-center mr-3 md:mr-0 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-transparent">
                <svg
                v-if="$colorMode.value == 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-50"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
            </button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <!-- Navigation Keys -->
                <li v-for="item in navigation" :key="item.name">
                    <NuxtLink :to="item.to" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-emerald-400 md:hover:bg-transparent md:hover:text-emerald-400 md:p-0 md:dark:hover:text-emerald-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-emerald-400 md:dark:hover:bg-transparent dark:border-gray-700">{{ item.   name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

// Dark Mode Set-up
type Theme = 'light' | 'dark'
const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
}

//  Navigation Text
const route = useRoute()
const navigation = [
    {name: 'Home', to: '/', current: route.name == 'index'},
    {name: 'About', to: '/about', current: route.name == 'about'},
    {name: 'Projects', to: '/projects', current: route.name == 'project'},
    {name: 'Contact', to: '/contact', current: route.name == 'about'},
]
</script>