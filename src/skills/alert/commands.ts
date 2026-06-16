import { SlashCommandBuilder } from 'discord.js';

export const alertCommand = new SlashCommandBuilder()
  .setName('alert')
  .setDescription('Set up blockchain event alerts')
  .addSubcommand(subcommand =>
    subcommand
      .setName('add')
      .setDescription('Add new alert')
      .addStringOption(option =>
        option.setName('type')
          .setDescription('Alert type')
          .setRequired(true)
          .addChoices(
            { name: 'Balance Change', value: 'balance' },
            { name: 'Gas Price', value: 'gas' },
            { name: 'Custom Message', value: 'custom' }
          )
      )
      .addStringOption(option =>
        option.setName('address')
          .setDescription('Monitored wallet address')
          .setRequired(false)
      )
      .addNumberOption(option =>
        option.setName('threshold')
          .setDescription('Trigger threshold')
          .setRequired(false)
      )
      .addStringOption(option =>
        option.setName('message')
          .setDescription('Custom message content')
          .setRequired(false)
      )
  )
  .addSubcommand(subcommand =>
    subcommand
      .setName('list')
      .setDescription('List all alerts')
  )
  .addSubcommand(subcommand =>
    subcommand
      .setName('remove')
      .setDescription('Remove alert')
      .addStringOption(option =>
        option.setName('id')
          .setDescription('Alert ID')
          .setRequired(true)
      )
  );
