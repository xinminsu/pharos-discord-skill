import { BaseSkill } from '../../skills/BaseSkill';
import { ChatInputCommandInteraction } from 'discord.js';
import { gasPriceCommand, gasEstimateCommand } from './commands';
import { handleGasPriceCommand, handleGasEstimateCommand } from './handler';

/**
 * Gas Skill
 * 
 * Provides gas price queries and transaction estimation for Pharos blockchain.
 */
export class GasSkill extends BaseSkill {
  constructor() {
    super({
      name: 'gas',
      version: '1.0.0',
      description: 'Query gas prices and estimate transaction fees on Pharos',
      author: 'Pharos Team',
      commands: [gasPriceCommand, gasEstimateCommand],
    });
  }
  
  async handleCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    switch (interaction.commandName) {
      case 'gas-price':
        await handleGasPriceCommand(interaction);
        break;
      case 'gas-estimate':
        await handleGasEstimateCommand(interaction);
        break;
      default:
        throw new Error(`Unknown command: ${interaction.commandName}`);
    }
  }
}
