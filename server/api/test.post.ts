export default defineEventHandler<{ body: Body }>(async (event) => {
  return {
    message: 'Hello World!',
  };
});
