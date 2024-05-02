import { Collapse } from 'antd';
import React from 'react';
import "./Accordion.scss";


function Accordion(props) {
    const { Panel } = Collapse;

    return (
        <Collapse accordion>
            <Panel header="How It works" key="1">
                <div>
                    <ul className='font_accordiontext'>
                        <li><p>Each NFT (Non-Fungible Token) has been designed to activate a specific function or feature within the YSL.IO ecosystem.</p></li>
                        <li><p>The Phoenix NFT has been developed for Optimisation vault participants looking to amplify their rewards, with each holder obtaining an Optimisation Multiplier equivalent to 125% of the default, resulting in a 25% boost in Optimisation Rewards!</p></li>
                        <li><p>The Referral NFT has been developed in conjunction with the YSL.IO Referral Program, enabling referrers to earn BUSD as Referral Rewards.</p></li>
                        <li><p>Our Early Access NFT has been developed specifically for the launch of V2, and will grant holders exclusive access to a 24-hour private sale of the bYSL token.</p></li>
                        <li><p>All NFTs that are issued will be non-transferable and can only be linked to one address.</p></li>
                    </ul>
                </div>
            </Panel>
            <Panel header="Phoenix NFT" key="2">
                <div>
                    <ul className='font_accordiontext'>
                        <li><p>Each NFT (Non-Fungible Token) has been designed to activate a specific function or feature within the YSL.IO ecosystem.</p></li>
                        <li><p>The Phoenix NFT has been developed for Optimisation vault participants looking to amplify their rewards, with each holder obtaining an Optimisation Multiplier equivalent to 125% of the default, resulting in a 25% boost in Optimisation Rewards!</p></li>
                        <li><p>The Referral NFT has been developed in conjunction with the YSL.IO Referral Program, enabling referrers to earn BUSD as Referral Rewards.</p></li>
                        <li><p>Our Early Access NFT has been developed specifically for the launch of V2, and will grant holders exclusive access to a 24-hour private sale of the bYSL token.</p></li>
                        <li><p>All NFTs that are issued will be non-transferable and can only be linked to one address.</p></li>
                    </ul>
                </div>
            </Panel>
            <Panel header="Referral NFT" key="3">
                <div>
                    <ul className='font_accordiontext'>
                        <li><p>Each NFT (Non-Fungible Token) has been designed to activate a specific function or feature within the YSL.IO ecosystem.</p></li>
                        <li><p>The Phoenix NFT has been developed for Optimisation vault participants looking to amplify their rewards, with each holder obtaining an Optimisation Multiplier equivalent to 125% of the default, resulting in a 25% boost in Optimisation Rewards!</p></li>
                        <li><p>The Referral NFT has been developed in conjunction with the YSL.IO Referral Program, enabling referrers to earn BUSD as Referral Rewards.</p></li>
                        <li><p>Our Early Access NFT has been developed specifically for the launch of V2, and will grant holders exclusive access to a 24-hour private sale of the bYSL token.</p></li>
                        <li><p>All NFTs that are issued will be non-transferable and can only be linked to one address.</p></li>
                    </ul>
                </div>
            </Panel>
            <Panel header="Early Access NFTs" key="4">
                <div>
                    <ul className='font_accordiontext'>
                        <li><p>Each NFT (Non-Fungible Token) has been designed to activate a specific function or feature within the YSL.IO ecosystem.</p></li>
                        <li><p>The Phoenix NFT has been developed for Optimisation vault participants looking to amplify their rewards, with each holder obtaining an Optimisation Multiplier equivalent to 125% of the default, resulting in a 25% boost in Optimisation Rewards!</p></li>
                        <li><p>The Referral NFT has been developed in conjunction with the YSL.IO Referral Program, enabling referrers to earn BUSD as Referral Rewards.</p></li>
                        <li><p>Our Early Access NFT has been developed specifically for the launch of V2, and will grant holders exclusive access to a 24-hour private sale of the bYSL token.</p></li>
                        <li><p>All NFTs that are issued will be non-transferable and can only be linked to one address.</p></li>
                    </ul>
                </div>
            </Panel>
        </Collapse>
    );
};
export default Accordion;

