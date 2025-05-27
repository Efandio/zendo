<script setup lang="ts">
import DashboardHeader from '@/components/DashboardHeader.vue';
import { Button } from '@/components/ui/button';
import { ClipboardList, Trash } from 'lucide-vue-next';
import { ref } from 'vue';

type Task = {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  createAt: string;
  updateAt: string;
  completed: boolean;
}

const priorities = [
  { label: 'High Priority', icon: Trash, color: 'text-red-500', focusColor: 'bg-red-500 hover:bg-red-500/80 text-white', tasks: [] as Task[], },
  { label: 'Medium Priority', icon: Trash, color: 'text-yellow-500', focusColor: 'bg-yellow-500 hover:bg-yellow-500/80 text-white', tasks: [] as Task[], },
  { label: 'Low Priority', icon: Trash, color: 'text-green-500', focusColor: 'bg-green-500 hover:bg-green-500/80 text-white', tasks: [] as Task[], },
];

  const addTaskButton = ref(false);
  const newTask = ref('');

  function addTaskClick() {
    addTaskButton.value = !addTaskButton.value;
  }

</script>


<template>
  <div class="w-screen h-screen p-4 justify-between space-y-4">
    <div class="h-[5vh] w-full">
      <DashboardHeader />
    </div>

    <main class="h-[80vh] w-full grid grid-rows-3 gap-4 relative">
      <div
        v-for="priority in priorities"
        :key="priority.label"
        class="row-span-1 border rounded-lg p-4 overflow-y-auto flex items-center gap-4"
      >
        <h2
          class="text-md font-semibold border-r h-full items-center flex pr-4"
          :class="priority.color"
        >
          {{ priority.label }}
        </h2>
        <div class="h-full flex items-center gap-2 pl-4 relative">
          <!-- Card -->
          <div class="h-full w-70 rounded-md border p-2 relative flex flex-col justify-evenly overflow-auto">
            <h1 class="border-b">Menyelesaikan Project SaaS dengan</h1>
            <div class="flex justify-between items-center">
              <p>Deadline: </p>
              <p>Hari ini</p>
            </div>
            <div class="flex items-center w-full justify-between relative">
              <Button
                class="h-6 w-55 cursor-pointer"
                :class="priority.focusColor"
              >
                Mode Fokus
              </Button>
              <component class="w-fit cursor-pointer hover:text-red-500" :is="priority.icon" />
            </div>
          </div>
        </div>
      </div>

      <div v-if="addTaskButton" class="absolute bg-transparent border backdrop-blur-md rounded-lg w-full h-full">

      </div>
      <div v-else class="absolute hidden bg-transparent border backdrop-blur-md rounded-lg w-full h-full">

      </div>

    </main>



    <Button
      class="h-[5vh] w-full flex justify-center items-center gap-2 bg-[#6B2AFF] rounded-lg font-semibold cursor-pointer hover:bg-[#6B2AFF]/80"
      @click="addTaskClick"
      >
      <div>
        <component :is="ClipboardList" />
      </div>
      <h2>
        Add New Task
      </h2>
    </Button>
  </div>

</template>
