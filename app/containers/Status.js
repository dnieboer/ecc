import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import StatusPage from '../components/Status/Status';

const mapStateToProps = state => {
  return {
    version: state.wallet.version,
    subversion: state.wallet.subversion,
    paytxfee: state.wallet.paytxfee,
    relayfee: state.wallet.relayfee,
    blocks: state.wallet.blocks,
    headers: state.wallet.headers,
    bestblockhash: state.wallet.bestblockhash,
    difficulty: state.wallet.difficulty,
    inboundpeers: state.wallet.inboundpeers,
    outboundpeers: state.wallet.outboundpeers,
    moneysupply: state.wallet.moneysupply,
    staking: state.wallet.staking,
    encrypted: state.wallet.encrypted
  };
};

export default withRouter(connect(mapStateToProps)(StatusPage));
