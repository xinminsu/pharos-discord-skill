import { BaseSkill } from '../../skills/BaseSkill';
import { ChatInputCommandInteraction } from 'discord.js';
import { balanceCommand } from './commands';
import { handleBalanceCommand } from './handler';

/**
 * Balance Skill
 * 
 * Provides wallet balance查询 functionality for Pharos blockchain.
 */
export class BalanceSkill extends BaseSkill {
  constructor() {
    super({
      name: 'balance',
      version: '1.0.0',
      description: 'Query wallet balance on Pharos blockchain',
      author: 'Pharos Team',
      commands: [balanceCommand],
    });
  }
  
  async handleCommand(interaction: ChatInputCommandInteraction): Promise<void> {
    await handleBalanceCommand(interaction);
  }
}
