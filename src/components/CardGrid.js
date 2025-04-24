// import React from 'react';
// import Link from '@docusaurus/Link';
// import styles from './CardGrid.module.css';

// export default function CardGrid({ cards }) {
//   return (
//     <div className={styles.gridContainer}>
//       {cards.map((card, idx) => (
//         <Link to={card.link} className={styles.cardLinkWrapper} key={idx}>
//           <div className={styles.card}>
//             <img src={card.img} alt={card.title} className={styles.cardImage} />
//             <h3>{card.title}</h3>
//             <p>{card.text}</p>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

// import React from 'react';
// import Link from '@docusaurus/Link';
// import styles from './CardGrid.module.css';
// import { ArrowRight } from 'lucide-react';

// export default function CardGrid({ cards }) {
//   return (
//     <div className={styles.gridContainer}>
//       {cards.map((card, idx) => {
//         const isExternal = card.link?.startsWith('http');

//         const CardInner = () => (
//           <div className={styles.card}>
//             {card.img && (
//               <img src={card.img} alt={card.title} className={styles.cardImage} />
//             )}
//             <div className={styles.cardContent}>
//               {card.title && <h3>{card.title}</h3>}
//               {card.text && <p>{card.text}</p>}
//               {card.link && (
//                 <div className={styles.linkIcon}>
//                   <span>Learn more</span>
//                   <ArrowRight size={18} />
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//         // If link exists, wrap with Link (internal or external)
//         return card.link ? (
//           isExternal ? (
//             <a
//               href={card.link}
//               className={styles.cardLinkWrapper}
//               key={idx}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <CardInner />
//             </a>
//           ) : (
//             <Link to={card.link} className={styles.cardLinkWrapper} key={idx}>
//               <CardInner />
//             </Link>
//           )
//         ) : (
//           <div className={styles.cardLinkWrapper} key={idx}>
//             <CardInner />
//           </div>
//         );
//       })}
//     </div>
//   );
// }


import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CardGrid.module.css';

export default function CardGrid({ cards }) {
  return (
    <div className={styles.gridContainer}>
      {cards.map((card, idx) => {
        const isExternal = card.link?.startsWith('http');

        const CardContent = (
          <div className={styles.card}>
            {card.img && (
              <img src={card.img} alt={card.title || 'Card image'} className={styles.cardImage} />
            )}
            {card.title && <h3>{card.title}</h3>}
            {card.text && <p>{card.text}</p>}
          </div>
        );

        if (card.link) {
          return isExternal ? (
            <a
              href={card.link}
              className={styles.cardLinkWrapper}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CardContent}
            </a>
          ) : (
            <Link to={card.link} className={styles.cardLinkWrapper} key={idx}>
              {CardContent}
            </Link>
          );
        } else {
          return (
            <div className={styles.cardLinkWrapper} key={idx}>
              {CardContent}
            </div>
          );
        }
      })}
    </div>
  );
}
