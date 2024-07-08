import React from 'react'
import Login from '../components/Login'
import Chatbot from '../components/Chatbot'

function Home() {

//   const handleClick = async (e) => {
//     e.preventDefault()
//     try {
//         const response = await fetch('/demofilter', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         });

        

//         if (response.ok) {
//             const result = await response.json();
//             console.log(result.length,'==========================')
//             setDvids('')
//             let newDvids = [];
//             for (let i = 0; i < result.length; i++) {
//                 newDvids.push(<div>
//                     <DemoVidCard
//                         vidnum={result[i][10]}
//                         vsrlang={formData.u_sr_lang}
//                         vdestlang={formData.u_dest_lang}
//                         sr_vid_name = {result[i][12]}
//                         dest_vid_name = {result[i][14]}
//                         u_vnum={result[i][10]}
//                         u_lip_q={result[i][5] || 0}
//                         u_tr_q={result[i][6] || 0}
//                         u_aud_q={result[i][7] || 0}
//                         u_all_q={result[i][8] || 0}
//                     /><br /></div>
//                 );
//             }
//             setDvids(newDvids);
//             console.log('Server response:', result);
//         } else {
//             console.error('Error sending data:', await response.text());
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

  return (
    <React.Fragment>
      <Login />
      <Chatbot />
    </React.Fragment>
  )
}

export default Home