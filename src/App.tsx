import { DrawerProvider } from "./front/components/ui"
import { MainPage } from "./front/pages/main";

export default function App() {
  return (
    <DrawerProvider>
      <MainPage />
    </DrawerProvider>
  )
}