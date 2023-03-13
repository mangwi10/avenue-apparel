export default function ({ route, store, redirect }) {
  const apparelDetail = store.getters.detailApparel(route.params.apparelId);
  const userId = store.getters.userId;
  console.log(userId);
  if (apparelDetail.userId !== userId) {
    redirect("/");
  }
}
