# react_redux_ts



```
# create app using typescript
yarn create react-app my-app --template typescript

# install redux toolkit
yarn add @reduxjs/toolkit

# install redux
yarn add react-redux
```



### Arquivos / Códigos

````typescript
src
	store
    	index.ts
		Stock.store.ts
	App.tsx
	index.tsx
````

* **index.ts:** importações e configuração do redux
* **Stock.store.ts:** propriedade de initialState com reducers e seus métodos com estados e payload

* **App.tsx:** apartir do dispatch e useSelector acionando o store com dois métodos diferentes 
  * <button onClick={() => **dispatch(asyncIncrement(2))**}>Somar</button>
  * <button onClick={() => **dispatch(decrement())**}>Subtrair</button>
* **index.tsx:** acionando o store para uso global das páginas 

### Links

- [redux toolkit](https://redux-toolkit.js.org/introduction/getting-started)
  - [async thunk](https://redux-toolkit.js.org/api/createAsyncThunk)

- [create app with ts](https://create-react-app.dev/docs/adding-typescript/)

- [explicação - conteúdo](https://www.youtube.com/watch?v=mT8nFaFyJnw)



