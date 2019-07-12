import Router from './index'
Router.beforeEach((to, from, next) => {
    if (!localStorage.token)  {
			to.path === "/login" ? next() : next({path: "/login"})
			return
		}
    next()
  })

