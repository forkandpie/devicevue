<style>
.staff_list {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
}

.person_item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 10px;
}

.person_item:hover {
    background-color: lightgrey;
}

.person_icon {
    height: 20px;
    padding: 0 10px;
}
</style>

<template>
  <portal to="dest-list">
    <span>Staff</span>
    <ul class="staff_list">
        <li class="person_item" 
            v-for="person in staffList" 
            :key="person.id"
            v-on:click=selectPerson(person.id)
        >
            <img class="person_icon" src="person.png">
            <span>{{person.name}} {{person.lastname}}</span>
        </li>
    </ul>
  </portal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props:{
        staffList: Array,
        selectPerson: Function
    }
})
export default class StaffList extends Vue {}
</script>