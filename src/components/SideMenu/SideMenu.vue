<template>
    <div class="side-menu">
        <div class="admin">            
        </div>

        <div class="menu-items">
            <customItemLink
                :to="'/bikes'"
                :imgIconName="'Bike.svg'"
                :name="'Bikes'"
                :downIcon="true"
             />
             <customItemLink
                :to="'/clients'"
                :imgIconName="'clients.svg'"
                :name="'Clients'"
                :downIcon="false"
             />
             <customItemLink
                :to="'/settings'"
                :imgIconName="'settings.svg'"
                :name="'Settings'"
                :downIcon="false"
             />
        </div>
    </div>
</template>


<script>
import customItemLink from './customItemLink'

export default {
    components: {
        customItemLink
    }
    
}
</script>

<style lang="scss">
.img {
    display: block;
}

$menu_width: 240px;
.side-menu {
    background: #2761F0;
    min-width: $menu_width;
    color: #FFF;
    border-bottom-right-radius: 60px;

    h5 {
        margin: 0;
        font-weight: 300;
        letter-spacing: 1px;
        font-size: 16px;
    }
}

/* admin */
.admin {
    height: 100px;
}

.router-link-exact-active {
    color: #FFF;
}

</style>