import { FaCoins, FaWallet, FaEthereum } from 'react-icons/fa';
import { SiSolana, SiPolygon } from 'react-icons/si';

const BlockchainMetricsCard = ({ metrics }) => {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">AllTime</h3>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <FaCoins className="text-yellow-500" />
          <span><strong>Total Tokens:</strong> {metrics.totalTokens}</span>
        </li>
        <li className="flex items-center space-x-2">
          <SiSolana className="text-blue-500" />
          <span><strong>Wallets on Solana:</strong> {metrics.totalWalletOnSolana}</span>
        </li>
        <li className="flex items-center space-x-2">
          <SiPolygon className="text-purple-500" />
          <span><strong>Wallets on Polygon:</strong> {metrics.totalWalletOnPolygon}</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaEthereum className="text-gray-500" />
          <span><strong>Wallets on Ethereum:</strong> {metrics.totalWalletOnEthereum}</span>
        </li>
      </ul>
    </div>
  );
};

export default BlockchainMetricsCard;
