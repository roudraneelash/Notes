State

{
users:{
isLoading:false,
error:null,
data:[]
},
//reducerPath
albums:{
queries:{},
mutations:{},
provided:{},
subscriptions:{},
config:{}
}
}

-- query is to fetch data
-- mutation is to make change to the data (create/delete)

-createApi
-fetchBaseQuery
-configureStore

const albumApi=createApi({
reducerPath:'albums',
baseQuery:fetchBaseQuery({
baseUrl:'http://localhost:3005'
})
endpoints: (builder)=>({
fetchAlbum:builder.query({
query:(user)=>{
return {
url:'/albums',
params:{
userId:user.id
},
method:'GET'
}
}
})
})
})

export const {useFetchAlbumQuery}=albumApi
