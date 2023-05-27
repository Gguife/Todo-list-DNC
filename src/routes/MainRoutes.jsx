import { useRoutes } from "react-router-dom";
import { ItemList } from "../pages/ItemList/ItemList";
import { DeleteItem } from "../pages/deleteItem/DeleteItem";
import { EditItem } from "../pages/editItem/EditItem";

export const MainRoutes = () =>{
  const routes = useRoutes([
    {path: '/', element: <ItemList />},
    {path: '/delete', element: <DeleteItem />},
    {path: '/edit', element: <EditItem />},
  ])

  return routes
}