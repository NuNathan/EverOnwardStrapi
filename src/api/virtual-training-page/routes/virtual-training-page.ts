export default {
  routes: [
    {
      method: "GET",
      path: "/virtual-training-page",
      handler: "virtual-training-page.find",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/virtual-training-page",
      handler: "virtual-training-page.update",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/virtual-training-page",
      handler: "virtual-training-page.delete",
      config: {
        policies: [],
      },
    },
  ],
};
