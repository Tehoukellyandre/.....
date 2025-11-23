import {  Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Footer } from '../component/footer'
import { Header } from '../component/header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header/>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      <Footer/>
    </>
  ),
  notFoundComponent: () => {
    return (
      <div>
         
      </div>
    )
  },
})
