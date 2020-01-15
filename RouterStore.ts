import {observeable} from 'mobx'
import () from "react";
class RouterStor{
    @observable paht = "History";
}

export const RouterStore = createContext(new RouterStor());\