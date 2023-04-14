import React from "react";
import {HashRouter, Route, Routes} from 'react-router-dom';
import {ClientListPage} from "./pages/clients/ClientList";
import {ClientCreatePage} from "./pages/clients/ClientCreate";
import {ClientViewPage} from "./pages/clients/ClientView";
import {InventoryCreatePage} from "./pages/inventories/InventoryCreate";

function App() {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<ClientListPage/>}/>
                    {/* Client paths */}
                    <Route path='/create-client' element={<ClientCreatePage/>}/>
                    <Route path='/clients/view-client/:id' element={<ClientViewPage />} />
                    {/* Inventory paths */}
                    {/* Change path name */}
                    <Route path='/create-inventory/:id' element={<InventoryCreatePage/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
