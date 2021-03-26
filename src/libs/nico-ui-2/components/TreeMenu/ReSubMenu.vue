<template>
    <Ni-SubMenu>
        <template #title>{{data.title}}</template>
        <template v-for="c in data.children" :key="c.id">
            <Ni-MenuItem v-if="!c.children">{{c.title}}</Ni-MenuItem>
            <Ni-ReSubMenu v-else :data="c"></Ni-ReSubMenu>
        </template>
    </Ni-SubMenu>
</template>

<script>
export default {
    name:'Ni-ReSubMenu',
    props:{
        data:Object
    }
}
</script>

<style lang="less" scoped>

</style>