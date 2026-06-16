import { Skill, ISkillRegistry } from './types';

/**
 * Skill Registry
 * 
 * Manages registration and retrieval of skills.
 */
export class SkillRegistry implements ISkillRegistry {
  private skills: Map<string, Skill> = new Map();
  
  /**
   * Register a skill
   * @param skill - The skill to register
   */
  register(skill: Skill): void {
    if (this.skills.has(skill.name)) {
      throw new Error(`Skill "${skill.name}" is already registered`);
    }
    
    this.skills.set(skill.name, skill);
    console.log(`Registered skill: ${skill.name} v${skill.version}`);
  }
  
  /**
   * Unregister a skill
   * @param name - The skill name to unregister
   * @returns true if skill was unregistered, false if not found
   */
  unregister(name: string): boolean {
    const skill = this.skills.get(name);
    
    if (!skill) {
      console.warn(`Skill "${name}" not found in registry`);
      return false;
    }
    
    this.skills.delete(name);
    console.log(`Unregistered skill: ${name}`);
    return true;
  }
  
  /**
   * Get a skill by name
   * @param name - The skill name
   * @returns The skill or undefined if not found
   */
  getSkill(name: string): Skill | undefined {
    return this.skills.get(name);
  }
  
  /**
   * Get all registered skills
   * @returns Array of all skills
   */
  getAllSkills(): Skill[] {
    return Array.from(this.skills.values());
  }
  
  /**
   * Check if a skill is registered
   * @param name - The skill name
   * @returns true if skill exists
   */
  hasSkill(name: string): boolean {
    return this.skills.has(name);
  }
  
  /**
   * Get the number of registered skills
   */
  getSkillCount(): number {
    return this.skills.size;
  }
  
  /**
   * Clear all registered skills
   */
  clear(): void {
    this.skills.clear();
    console.log('Cleared all skills from registry');
  }
}
