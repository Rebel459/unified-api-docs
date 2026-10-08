### EntityGenerator

Used to generate entities and related content.

Whilst these are fully data-driven, entities are somewhat more hardcoded than blocks and items, hence why custom properties are more limited as most custom entity behaviour is handled through each entity's unique class.

**Methods**

`Supplied<? extends EntityType<?>> register`
- used to register an entity. Accepts the name, followed by the vanilla builder, followed by the `EntityGenerator` builder

**Builder**

`builder.properties`
- provides a custom `EntityGenerator.Properties` builder. Whilst these should be self-explanatory, they are documented under [data-driven entities](/data/registries/entities)

`builder.assets`
- `name(String value)` sets the generated name

`builder.data`
- `tag(TagKey<EntityType<?>> tag)` adds a tag to the block, block item or both
- `optionalTag(TagKey<EntityType<?>> tag)` adds an optional tag to the block, block item or both
- `loot(BiFunction<EntityType<?>, EntityLootSubProvider, LootTable.Builder> lootTable)` provides a function used to create the block's loot table