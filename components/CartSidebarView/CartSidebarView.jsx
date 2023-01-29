import s from './CartSidebarView.module.css'

import SidebarLayout from '../SidebarLayout/SidebarLayout'
import Bag from '../icons/Bag'

const CartSidebarView = () => {
  return (
    <SidebarLayout
      className={s.empty}
      handleClose={handleClose}
    >
        <div className="flex-1 px-4 flex flex-col justify-center items-center">
          <span className="border border-dashed border-primary rounded-full flex items-center justify-center w-16 h-16 p-12 bg-secondary text-secondary">
            <Bag className="absolute" />
          </span>
          <h2 className="pt-6 text-2xl font-bold tracking-wide text-center">
            Your cart is empty
          </h2>
          <p className="text-accent-3 px-10 text-center pt-2">
            Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
          </p>
        </div>
    </SidebarLayout>
  )
}

export default CartSidebarView
