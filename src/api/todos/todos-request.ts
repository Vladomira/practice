export const todosUrl = "https://graphqlzero.almansi.me/api";
//  typeof query
export const makeTodosRequest = async (query: string) => {
   // return fetch(url, {
   //     method: "POST",
   //     headers: {
   //         "Content-type": "application/json",
   //     },
   //     body: JSON.stringify({ query }),
   // }).then((res) => res.json());
   try {
      const res = await fetch(todosUrl, {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify({ query }),
      });

      return res.json();
   } catch (error) {
      return error;
   }
};
