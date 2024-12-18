export default defineEventHandler(async () => {
  const data = await $fetch('/api/test', {
    method: 'POST',
  });
  console.log(data);
  return data;
});
