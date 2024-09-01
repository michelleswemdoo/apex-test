<!-- <template>
  <div>
    <h1>Fetch Data</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <ul v-else>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

type Item = { id: string; title: string };

const items = ref<Item[]>([]);
const errorMessage = ref<string | null>(null);
const loading = ref(true);

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data: Item[] = await response.json();
    items.value = data;
  } catch (error) {
    if (error instanceof Error) errorMessage.value = error.message as string;
    console.error(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped></style> -->

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <ul v-else>
      <li v-for="(item, i) in items" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const errorMessage = ref<string | null>(null);
const loading = ref(true);
const items = ref<any[]>([]);
const frtcData = async () => {
  try {
    const res = await fetch('/');
    if (!res.ok) {
      throw new Error('Something went wrong');
    }
    const data = await res.json();
    items.value = data;
  } catch (err) {
    if (err instanceof Error) errorMessage.value = err.message;
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  frtcData();
});
</script>

<style scoped></style>
