// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           author
//           description
//           simpleData
//           title
//           person {
//             name
//             age
//           }
//           complexData {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       {data.site.siteMetadata.person.name}
//       {data.site.siteMetadata.complexData.map((item, index) => {
//         return (
//           <p key={index}>
//             {item.name}: {item.age}
//           </p>
//         )
//       })}
//     </div>
//   )
// }

// export default ComponentName

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        person {
          name
          age
        }
        complexData {
          age
          name
        }
      }
    }
  }
`
const FetchData = () => {
  //const data = useStaticQuery(getData)
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <div>
        {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
        <h2>Site title is : {title}</h2>
      </div>
    </div>
  )
}

export default FetchData
