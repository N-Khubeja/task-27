export interface Iroutes {
    path:string,
    label:string
}

export const route:Iroutes[] = [
    {path:'/',label:'home'},
    {path:'/about',label:'about'},
    {path:'/contact',label:'contact'}
]