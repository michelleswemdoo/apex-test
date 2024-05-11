<template>
  <div role="status" class="p-4 space-y-4 divide-y rounded shadow animate-pulse">
    <div class=" ">
      <div class="flex gap-10">
        <div class="h-3 w-full rounded-full bg-gray-300 mb-2.5" />
        <div class="h-3 w-full rounded-full bg-gray-300 mb-2.5" />
      </div>
      <div class="flex gap-10">
        <div class="h-2 w-1/3 rounded-full bg-gray-300 mb-2.5" v-for="index in 4" :key="index" />
      </div>
    </div>
    <span class="sr-only">Loading...</span>
  </div>
</template>
