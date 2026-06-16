import { SlashCommandBuilder } from 'discord.js';

export const pushCommand = new SlashCommandBuilder()
  .setName('push')
  .setDescription('Push message to channel')
  .addStringOption(option =>
    option.setName('message')
      .setDescription('Message content to push')
      .setRequired(true)
  )
  .addChannelOption(option =>
    option.setName('channel')
      .setDescription('Target channel (optional, defaults to current channel)')
      .setRequired(false)
  );
