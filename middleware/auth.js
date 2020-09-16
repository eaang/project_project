export default function (context) {
  if (!context.store.getters.loggedIn) {
    context.redirect('/admin/auth')
  }
}
