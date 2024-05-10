<template>
    <div class="dropdown relative" @click="toggleDropdown">
        <ImgComponent
            image_src="avatar.png"
            image_alt="avatar"
            image_loading="eager"
            class="dropdown-toggle"
        />
        <ul v-if="isOpen" class="dropdown-menu">
            <li v-for="(item, index) in items" :key="index" @click="selectItem(item)">
                <a 
                    class="block" 
                    v-if="item.name !== 'Logout'" :href="item.link"
                >
                    {{ item.name }}
                </a>
                <span
                    v-else
                    class="block" 
                    @click="logout()"
                >
                    {{ item.name }}
                </span>
            </li>
        </ul>
    </div>
</template>