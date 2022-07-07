import React from 'react';
import Formation from './Formation';
import wcs from '../images/wcs.png';
import gsf from '../images/gsf.png';
import esarc from '../images/esarc.png';
import '../css/Formations.css';

function Formations() {
  return (
    <div className='formations' id='#formations'>
      <p>Formations</p>
      <Formation
        title='Développeur web et web mobile'
        title2='Equivalent Bac +2 et inscrit au RNCP'
        link='https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web?utm_campaign=FR_SEARCH+-+Marque&utm_term=wild%20code%20school&utm_source=adwords&utm_medium=ppc&hsa_grp=130792156507&hsa_src=g&hsa_cam=14821000047&hsa_ad=595760405168&hsa_ver=3&hsa_kw=wild%20code%20school&hsa_net=adwords&hsa_tgt=aud-1646032209309:kwd-440435778420&hsa_mt=p&hsa_acc=4421706736&gclid=CjwKCAjwiJqWBhBdEiwAtESPaDKOlyCEUsmwnCqz6KgILOxMhSkNFXL9InUB-yd5QyvW2UK_QeMUDBoC50kQAvD_BwE'
        picture={wcs}
        description='durée de 5 mois'
      />
      <Formation
        title='Bachelor Tourisme Réceptif et international'
        title2='BTS Tourisme'
        link='https://grand-sud.fr/nos-formations-tourisme/bachelor-tourisme-receptif-et-international/'
        picture={gsf}
        description='durée de 5 mois'
      />
      <Formation
        title='BTS Management des Unités Commerciales'
        link='https://www.esarc-evolution.fr/ecole-bts-toulouse/formation/bts-management-unites-commerciales'
        picture={esarc}
        description='durée de 5 mois'
      />
    </div>
  );
}

export default Formations;
