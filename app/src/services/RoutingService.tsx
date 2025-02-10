import { Routes, Route, Link } from 'react-router-dom';
import { useAppContext } from "@/context/ContextProvider"
import { themeActiveType } from '@/context/types'

import { Header } from '@/components/Header/Header';
import{ Footer } from '@/components/Footer/Footer';

import { Start } from '@/pages/Start';
import { Authorization } from '@/pages/Authorization';
import { FormSimpleTimer } from '@/pages/SimpleTimer/Form';
import { Navigation } from '@/pages/Navigation';


//@ts-expect-error ошибка
import styles from '@/services/errore404.module.scss';

export function RoutingService() {
  const  {themeActive}:{themeActive:  themeActiveType} =  useAppContext(); 
  return (
<div className={themeActive.section}>
    <header>
            <Header/>
    </header>
    <main>
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="simpleTimer" element={ <FormSimpleTimer/> }></Route>
            <Route path="authorization" element={ <Authorization/> }></Route>
            <Route path="navigation" element={ <Navigation/> }></Route>
            <Route path="*" element={<Page404 />}></Route>
          </Routes>
    </main>
    <footer>
            <Footer/>
    </footer>
</div>
  );
}

function Page404() {  //404
  const  {themeActive}:{themeActive:  themeActiveType} =  useAppContext(); 
  return (
<div className={themeActive.section}>
        <div className={themeActive.logo}>   
            <div className={styles.Page404}>
              <div className={styles.fof}>
                <h1>Error 404</h1>
                  <br />
                <Link to="/">Go to home</Link>
              </div>
            </div>
        </div>
</div>
  );
}
