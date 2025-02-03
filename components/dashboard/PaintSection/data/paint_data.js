const paint_data = [
    {
        "category": "3d",
        "prompt": "A Textured Puppetry style art of a {subject}, looking straight at the camera.",
        "reference_image": "craft_textured_puppetry.png",
        "src": "/assets/images/dashboard/final_website/3d/craft_textured_puppetry.png"
    },
    {
        "category": "3d",
        "prompt": "a 3D rendered character of a {subject}, looking straight at the camera, formal attire, detailed rendering, clean white background, realistic features",
        "reference_image": "3d_rendering_3d_rendered_character.jpg",
        "src": "/assets/images/dashboard/final_website/3d/3d_rendering_3d_rendered_character.png"
    },
    {
        "category": "3d",
        "prompt": "a 3D cartoon illustration of a {subject}, watching a movie, stylized proportions, smooth textures, vibrant colors, clean lines",
        "reference_image": "illustration_3d_cartoon_illustration.jpg",
        "src": "/assets/images/dashboard/final_website/3d/illustration_3d_cartoon_illustration.png"
    },
    {
        "category": "3d",
        "prompt": "a 3D cartoon illustration of a {subject}, looking straight at the camera, cozy interior, warm tones, detailed textures, expressive character design",
        "reference_image": "illustration_3d_cartoon_with_pet.jpg",
        "src": "/assets/images/dashboard/final_website/3d/illustration_3d_cartoon_with_pet.png"
    },
    {
        "category": "3d",
        "prompt": "a 3D cartoon illustration of a {subject}, looking straight at the camera, detailed rendering, vibrant lighting, soft textures, expressive style",
        "reference_image": "illustration_3d_cartoon_with_pet_2.jpg",
        "src": "/assets/images/dashboard/final_website/3d/illustration_3d_cartoon_with_pet_2.png"
    },
    {
        "category": "3d",
        "prompt": "a cartoon portrait of a {subject}, looking straight at the camera, detailed facial features, textured shading, warm color palette, stylized realism",
        "reference_image": "illustration_cartoon_portrait.jpg",
        "src": "/assets/images/dashboard/final_website/3d/illustration_cartoon_portrait.png"
    },
    {
        "category": "3d",
        "prompt": "A whimsical muppet-style illustration of a {subject}, looking straight at the camera, vibrant colors, playful textures, expressive features, comedic tone.",
        "reference_image": "illustration_muppet_character_portraits.png",
        "src": "/assets/images/dashboard/final_website/3d/illustration_muppet_character_portraits.png"
    },
    {
        "category": "Anime",
        "prompt": "an anime-style cityscape illustration of a {subject}, looking straight at the camera, vibrant colors, detailed architecture, dynamic lighting, lively urban atmosphere",
        "reference_image": "digital_art_anime_cityscape_illustration.jpg",
        "src": "/assets/images/dashboard/final_website/Anime/digital_art_anime_cityscape_illustration.png"
    },
    {
        "category": "Anime",
        "prompt": "a 1990s anime-style illustration of a {subject}, looking straight at the camera, clean lines, vibrant colors, retro shading, detailed background",
        "reference_image": "illustration_1990s_anime.png",
        "src": "/assets/images/dashboard/final_website/Anime/illustration_1990s_anime.png"
    },
    {
        "category": "Anime",
        "prompt": "A neo-noir graphic illustration of a {subject}, looking straight at the camera, bold outlines, muted yet dramatic colors, urban environments, cinematic composition.",
        "reference_image": "illustration_neo-noir_graphic_art.png",
        "src": "/assets/images/dashboard/final_website/Anime/illustration_neo-noir_graphic_art.png"
    },
    {
        "category": "Anime",
        "prompt": "a realistic anime-style portrait of a {subject}, looking straight at the camera, soft shading, vibrant colors, detailed background, expressive features",
        "reference_image": "illustration_realistic_anime_portrait.png",
        "src": "/assets/images/dashboard/final_website/Anime/illustration_realistic_anime_portrait.png"
    },
    {
        "category": "cartoon",
        "prompt": "a cartoon illustration of a {subject}, looking straight at the camera, playful lines, vibrant colors, exaggerated features, soft textures",
        "reference_image": "drawing_cartoon_illustration.png",
        "src": "/assets/images/dashboard/final_website/cartoon/drawing_cartoon_illustration.png"
    },
    {
        "category": "charcoal",
        "prompt": "A charcoal portrait of {subject} in the style of Leonardo da Vinci, looking straight at the camera.",
        "reference_image": "charcoal_portrait_1.png",
        "src": "/assets/images/dashboard/final_website/charcoal/charcoal_portrait_1.png"
    },
    {
        "category": "charcoal",
        "prompt": "A classical charcoal portrait of a renaissance noble in the style of Rembrandt, looking straight at the camera.",
        "reference_image": "charcoal_portrait_2.png",
        "src": "/assets/images/dashboard/final_website/charcoal/charcoal_portrait_2.png"
    },
    {
        "category": "charcoal",
        "prompt": "a charcoal portrait of a {subject}, looking straight at the camera, rough textures, bold contrasts, fine details, dramatic shadows",
        "reference_image": "drawing_charcoal_portrait.png",
        "src": "/assets/images/dashboard/final_website/charcoal/drawing_charcoal_portrait.png"
    },
    {
        "category": "charcoal",
        "prompt": "A charcoal portrait of a {subject}, looking straight at the camera.",
        "reference_image": "introspective_charcoal_art.jpg",
        "src": "/assets/images/dashboard/final_website/charcoal/introspective_charcoal_art.png"
    },
    {
        "category": "Comic",
        "prompt": "A Comic Illustration in the style of Sarah Andersen of a {subject}, looking straight at the camera.",
        "reference_image": "comics_comic_illustration.png",
        "src": "/assets/images/dashboard/final_website/Comic/comics_comic_illustration.png"
    },
    {
        "category": "Comic",
        "prompt": "a comic book style illustration of a {subject}, looking straight at the camera, sharp lines, vibrant colors, dynamic composition, dramatic lighting",
        "reference_image": "drawing_comic_book_illustration.png",
        "src": "/assets/images/dashboard/final_website/Comic/drawing_comic_book_illustration.png"
    },
    {
        "category": "Comic",
        "prompt": "a comic strip illustration of a {subject}, looking straight at the camera, bold outlines, sharp contrasts, dynamic composition, retro vibes",
        "reference_image": "drawing_comic_strip_illustration.png",
        "src": "/assets/images/dashboard/final_website/Comic/drawing_comic_strip_illustration.png"
    },
    {
        "category": "Comic",
        "prompt": "a gothic comic illustration of a {subject}, looking straight at the camera, detailed linework, dramatic contrasts, dark aesthetics, textured backgrounds",
        "reference_image": "drawing_gothic_comic_illustration.png",
        "src": "/assets/images/dashboard/final_website/Comic/drawing_gothic_comic_illustration.png"
    },
    {
        "category": "Comic",
        "prompt": "a horror comic-style illustration of a {subject}, looking straight at the camera, dramatic lighting, bold outlines, vivid colors, eerie atmosphere",
        "reference_image": "illustration_horror_comic_art.png",
        "src": "/assets/images/dashboard/final_website/Comic/illustration_horror_comic_art.png"
    },
    {
        "category": "Concept Art",
        "prompt": "An iridescent surreal artwork of a {subject}, looking straight at the camera, vibrant colors, metallic textures, glowing highlights, ethereal and abstract composition.",
        "reference_image": "digital_art_iridescent_surrealism.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/digital_art_iridescent_surrealism.png"
    },
    {
        "category": "Concept Art",
        "prompt": "A light tracing digital artwork of a {subject}, looking straight at the camera, dynamic lines, glowing effects, abstract patterns, ethereal lighting.",
        "reference_image": "digital_art_light_tracing_art.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/digital_art_light_tracing_art.png"
    },
    {
        "category": "Concept Art",
        "prompt": "a pixel art drawing of a {subject}, looking straight at camera, blocky textures, vibrant pixel colors, retro style, grid-like composition",
        "reference_image": "digital_art_pixel_art.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/digital_art_pixel_art.png"
    },
    {
        "category": "Concept Art",
        "prompt": "a fantasy illustration of a {subject}, looking straight at the camera, glowing textures, bioluminescent lighting, surreal anatomy, vibrant hues",
        "reference_image": "fantasy_bioluminescent_creature.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/fantasy_bioluminescent_creature.png"
    },
    {
        "category": "Concept Art",
        "prompt": "a photograph of a {subject}, looking straight at the camera, vibrant light trails, fiber optic effects, dynamic flow, glowing atmosphere",
        "reference_image": "Fiber_optic_light_painting_v6.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/Fiber_optic_light_painting_v6.png"
    },
    {
        "category": "Concept Art",
        "prompt": "A Grungy Narrative style illustration of a {subject}, looking straight at the camera.",
        "reference_image": "illustration_grungy_narrative.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/illustration_grungy_narrative.png"
    },
    {
        "category": "Concept Art",
        "prompt": "a psychedelic illustration of a {subject}, looking straight at the camera, vivid colors, fluid lines, surreal composition, abstract patterns",
        "reference_image": "illustration_psychedelic_illustration.jpg",
        "src": "/assets/images/dashboard/final_website/Concept Art/illustration_psychedelic_illustration.png"
    },
    {
        "category": "Concept Art",
        "prompt": "A streetwear illustration of a {subject}, looking straight at the camera, bold colors, clean lines, dynamic poses, urban aesthetics, retro vibes.",
        "reference_image": "illustration_streetwear_illustration.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/illustration_streetwear_illustration.png"
    },
    {
        "category": "Concept Art",
        "prompt": "An impressionistic painting of {subject} in the style of Claude Monet, looking straight at the camera.",
        "reference_image": "impressionist_sunset.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/impressionist_sunset.png"
    },
    {
        "category": "Concept Art",
        "prompt": "a painting of a {subject}, looking straight at camera, realistic details, muted tones, storytelling composition, emotional expressions",
        "reference_image": "painting_figurative_art.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/painting_figurative_art.png"
    },
    {
        "category": "Concept Art",
        "prompt": "a neon blacklight painting of a {subject}, looking straight at the camera, fluorescent colors, glowing highlights, intricate details, bold contrast",
        "reference_image": "painting_neon_blacklight_painting.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/painting_neon_blacklight_painting.png"
    },
    {
        "category": "Concept Art",
        "prompt": "a realistic portrait painting of a {subject}, looking straight at the camera, fine details, bold colors, contemporary style, textured backgrounds",
        "reference_image": "painting_portrait_realism.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/painting_portrait_realism.png"
    },
    {
        "category": "Concept Art",
        "prompt": "A romantic realist painting of a {subject}, looking straight at the camera, soft lighting, intricate details, lush environments, vibrant yet natural colors.",
        "reference_image": "painting_romantic_realism.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/painting_romantic_realism.png"
    },
    {
        "category": "Concept Art",
        "prompt": "A romantic symbolism painting of a {subject}, looking straight at the camera, intricate textures, rich color palette, mythological themes, emotional depth, surreal elements.",
        "reference_image": "painting_romantic_symbolism.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/painting_romantic_symbolism.png"
    },
    {
        "category": "Concept Art",
        "prompt": "a rustic realist portrait of a {subject}, looking straight at the camera, fine brushwork, earthy tones, emotional expression, textured backgrounds",
        "reference_image": "painting_rustic_realist_portrait.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/painting_rustic_realist_portrait.png"
    },
    {
        "category": "Concept Art",
        "prompt": "a photograph of a {subject}, looking straight at the camera, ultraviolet lighting, vibrant purple and blue hues, ethereal glow, dramatic contrast",
        "reference_image": "photography_ultraviolet_photography.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/photography_ultraviolet_photography.png"
    },
    {
        "category": "Concept Art",
        "prompt": "A bold, vibrant brushstroke portrait of {subject} in the style of Pablo Picasso, looking straight at the camera.",
        "reference_image": "vibrant_brushstrokes.png",
        "src": "/assets/images/dashboard/final_website/Concept Art/vibrant_brushstrokes.png"
    },
    {
        "category": "Fantasy",
        "prompt": "a fantasy landscape painting of a {subject}, looking straight at the camera, majestic composition, vibrant colors, detailed scenery, atmospheric lighting",
        "reference_image": "fantasy_fantasy_landscape_art.png",
        "src": "/assets/images/dashboard/final_website/Fantasy/fantasy_fantasy_landscape_art.png"
    },
    {
        "category": "Fantasy",
        "prompt": "A fantasy illustration of a {subject}, looking straight at the camera, detailed line work, dynamic poses, dramatic lighting, action-packed composition.",
        "reference_image": "illustration_fantasy_illustration.png",
        "src": "/assets/images/dashboard/final_website/Fantasy/illustration_fantasy_illustration.png"
    },
    {
        "category": "Fantasy",
        "prompt": "a fantasy illustration of a {subject}, looking straight at the camera, magical landscapes, vivid colors, intricate details, atmospheric lighting",
        "reference_image": "painting_fantasy_illustration.png",
        "src": "/assets/images/dashboard/final_website/Fantasy/painting_fantasy_illustration.png"
    },
    {
        "category": "Genifyl",
        "prompt": "a digital fashion illustration of a {subject}, looking straight at the camera, vibrant colors, textured brushstrokes, stylized design, creative composition",
        "reference_image": "digital_art_digital_fashion_illustration.jpg",
        "src": "/assets/images/dashboard/final_website/Genifyl/digital_art_digital_fashion_illustration.png"
    },
    {
        "category": "Genifyl",
        "prompt": "a hyper-realistic digital portrait of a {subject}, looking straight at the camera, vibrant lighting, smooth textures, detailed features, expressive atmosphere",
        "reference_image": "digital_art_hyper-realistic_digital_portrait.png",
        "src": "/assets/images/dashboard/final_website/Genifyl/digital_art_hyper-realistic_digital_portrait.png"
    },
    {
        "category": "Genifyl",
        "prompt": "a crayon drawing of a {subject}, looking straight at the camera, vibrant strokes, textured lines, colorful layers, expressive details",
        "reference_image": "drawing_crayon_portrait_drawing.png",
        "src": "/assets/images/dashboard/final_website/Genifyl/drawing_crayon_portrait_drawing.png"
    },
    {
        "category": "Genifyl",
        "prompt": "a manga illustration of a {subject}, looking straight at the camera, dynamic poses, detailed linework, vibrant colors, expressive characters",
        "reference_image": "drawing_manga_illustration.png",
        "src": "/assets/images/dashboard/final_website/Genifyl/drawing_manga_illustration.png"
    },
    {
        "category": "Genifyl",
        "prompt": "an illustration of a {subject}, looking straight at the camera, clean lines, vibrant sunset tones, detailed architecture, expressive lighting",
        "reference_image": "illustration_beatiful.png",
        "src": "/assets/images/dashboard/final_website/Genifyl/illustration_beatiful.png"
    },
    {
        "category": "Genifyl",
        "prompt": "A Pulp Art style illustration of a {subject}, looking straight at the camera.",
        "reference_image": "illustration_pulp_art.png",
        "src": "/assets/images/dashboard/final_website/Genifyl/illustration_pulp_art.png"
    },
    {
        "category": "Genifyl",
        "prompt": "a retro comic-style illustration of a {subject}, looking straight at the camera, bold lines, tropical scenery, vibrant colors, nostalgic feel",
        "reference_image": "illustration_retro_comic_illustration.jpg",
        "src": "/assets/images/dashboard/final_website/Genifyl/illustration_retro_comic_illustration.png"
    },
    {
        "category": "Genifyl",
        "prompt": "a retro comic-style illustration of a {subject}, looking straight at the camera, sunset hues, bold strokes, vibrant contrasts, tropical atmosphere",
        "reference_image": "illustration_retro_comic_illustration_2.jpg",
        "src": "/assets/images/dashboard/final_website/Genifyl/illustration_retro_comic_illustration_2.png"
    },
    {
        "category": "Genifyl",
        "prompt": "a crayon portrait of a {subject}, looking straight at the camera, vibrant colors, messy strokes, playful composition, bold expression",
        "reference_image": "painting_crayon_portrait.png",
        "src": "/assets/images/dashboard/final_website/Genifyl/painting_crayon_portrait.png"
    },
    {
        "category": "Genifyl",
        "prompt": "A low-angle realist painting of a {subject}, looking straight at the camera, detailed brushwork, dramatic perspective, natural lighting, urban or architectural background.",
        "reference_image": "painting_low-angle_realism.png",
        "src": "/assets/images/dashboard/final_website/Genifyl/painting_low-angle_realism.png"
    },
    {
        "category": "Illustration",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "art_tool_minimalist.jpg",
        "src": "/assets/images/dashboard/final_website/Illustration/art_tool_minimalist.png"
    },
    {
        "category": "Illustration",
        "prompt": "a sketch of a {subject}, looking straight at the camera, clean lines, simple tones, expressive details, cartoon-like charm",
        "reference_image": "a_cute.png",
        "src": "/assets/images/dashboard/final_website/Illustration/a_cute.png"
    },
    {
        "category": "Illustration",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "beach_monster_sketch.png",
        "src": "/assets/images/dashboard/final_website/Illustration/beach_monster_sketch.png"
    },
    {
        "category": "Illustration",
        "prompt": "A Rotoscope Animation style digital art of a {subject}, looking straight at the camera.",
        "reference_image": "digital_art_rotoscope_animation.png",
        "src": "/assets/images/dashboard/final_website/Illustration/digital_art_rotoscope_animation.png"
    },
    {
        "category": "Illustration",
        "prompt": "a sunset cityscape digital painting of a {subject}, looking straight at the camera, warm tones, modern skyline, glowing sunset, urban perspective",
        "reference_image": "digital_painting_sunset_cityscape.png",
        "src": "/assets/images/dashboard/final_website/Illustration/digital_painting_sunset_cityscape.png"
    },
    {
        "category": "Illustration",
        "prompt": "a graphic noir illustration of a {subject}, looking straight at the camera, sharp contrasts, bold lines, retro aesthetics, dramatic composition",
        "reference_image": "drawing_graphic_noir_illustration.png",
        "src": "/assets/images/dashboard/final_website/Illustration/drawing_graphic_noir_illustration.png"
    },
    {
        "category": "Illustration",
        "prompt": "a graphic novel style drawing of a {subject}, looking straight at the camera, clean lines, monochrome shading, detailed expressions, storytelling elements",
        "reference_image": "drawing_graphic_novel_illustration.png",
        "src": "/assets/images/dashboard/final_website/Illustration/drawing_graphic_novel_illustration.png"
    },
    {
        "category": "Illustration",
        "prompt": "a pen and ink illustration of a {subject}, looking straight at the camera, detailed linework, shading techniques, monochrome palette, traditional style",
        "reference_image": "drawing_pen_and_ink_illustration.png",
        "src": "/assets/images/dashboard/final_website/Illustration/drawing_pen_and_ink_illustration.png"
    },
    {
        "category": "Illustration",
        "prompt": "an illustration of a {subject}, looking straight at the camera, bold lines, flat colors, patterned backgrounds, contemporary aesthetic",
        "reference_image": "Hope_Gangloff_v6.png",
        "src": "/assets/images/dashboard/final_website/Illustration/Hope_Gangloff_v6.png"
    },
    {
        "category": "Illustration",
        "prompt": "a 90s vintage anime illustration of a {subject}, looking straight at the camera, bold line art, soft colors, retro shading, expressive details",
        "reference_image": "illustration_90s_vintage_anime.png",
        "src": "/assets/images/dashboard/final_website/Illustration/illustration_90s_vintage_anime.png"
    },
    {
        "category": "Illustration",
        "prompt": "a digital illustration of a {subject}, looking straight at the camera, smooth lines, vibrant colors, stylized details, soft lighting",
        "reference_image": "illustration_digital_illustration.png",
        "src": "/assets/images/dashboard/final_website/Illustration/illustration_digital_illustration.png"
    },
    {
        "category": "Illustration",
        "prompt": "A Dynamic Sketchnote style drawing of a {subject}, looking straight at the camera.",
        "reference_image": "illustration_dynamic_sketchnote.png",
        "src": "/assets/images/dashboard/final_website/Illustration/illustration_dynamic_sketchnote.png"
    },
    {
        "category": "Illustration",
        "prompt": "A graphic novel-style illustration of a {subject}, looking straight at the camera, monochromatic tones, bold outlines, detailed environments, storytelling composition.",
        "reference_image": "illustration_graphic_novel_illustration.png",
        "src": "/assets/images/dashboard/final_website/Illustration/illustration_graphic_novel_illustration.png"
    },
    {
        "category": "Illustration",
        "prompt": "a manga-inspired monochrome illustration of a {subject}, looking straight at the camera, soft shading, elegant lines, contemplative mood, detailed background",
        "reference_image": "illustration_manga-inspired_monochrome.png",
        "src": "/assets/images/dashboard/final_website/Illustration/illustration_manga-inspired_monochrome.png"
    },
    {
        "category": "Illustration",
        "prompt": "a sketch illustration of a {subject}, looking straight at the camera, light pencil strokes, minimal shading, cartoonish proportions, clean composition",
        "reference_image": "illustration_sketch_illustration.png",
        "src": "/assets/images/dashboard/final_website/Illustration/illustration_sketch_illustration.png"
    },
    {
        "category": "Ink",
        "prompt": "a dynamic ink portrait of a {subject}, looking straight at the camera, bold strokes, deep contrasts, spontaneous texture, expressive details",
        "reference_image": "drawing_dynamic_ink_portrait.png",
        "src": "/assets/images/dashboard/final_website/Ink/drawing_dynamic_ink_portrait.png"
    },
    {
        "category": "Ink",
        "prompt": "an ink sketch of a {subject}, looking straight at the camera, bold black lines, cross-hatching, expressive shadows, hand-drawn details",
        "reference_image": "illustration_ink_sketch_portrait.png",
        "src": "/assets/images/dashboard/final_website/Ink/illustration_ink_sketch_portrait.png"
    },
    {
        "category": "Ink",
        "prompt": "Black and white ink drawing on thick white parchment of a {subject}'s face.",
        "reference_image": "ink_sketch_parchment.png",
        "src": "/assets/images/dashboard/final_website/Ink/ink_sketch_parchment.png"
    },
    {
        "category": "Ink",
        "prompt": "A stylized, vibrant sketch of a {subject}, looking straight at the camera, drawn with loose ink outlines and splashes of color. Combines urban fashion with expressive text elements.",
        "reference_image": "urban_vibrancy_ink_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Ink/urban_vibrancy_ink_sketch.png"
    },
    {
        "category": "Line",
        "prompt": "An expressive, chaotic pencil sketch of a {subject}, looking straight at the camera. This style emphasizes raw emotion and energy through erratic, overlapping lines and bold shading.",
        "reference_image": "chaotic_expressionism_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Line/chaotic_expressionism_sketch.png"
    },
    {
        "category": "Line",
        "prompt": "A Wireframe Drawing style digital art of a {subject}, looking straight at the camera.",
        "reference_image": "digital_art_wireframe_drawing.png",
        "src": "/assets/images/dashboard/final_website/Line/digital_art_wireframe_drawing.png"
    },
    {
        "category": "Line",
        "prompt": "A minimal one-line drawing of a {subject}, looking straight at the camera, clean lines, abstract composition, simplistic style, artistic elegance.",
        "reference_image": "drawing_minimal_line_art.png",
        "src": "/assets/images/dashboard/final_website/Line/drawing_minimal_line_art.png"
    },
    {
        "category": "Line",
        "prompt": "a minimal line art drawing of a {subject}, looking straight at the camera, clean lines, simple shapes, isolated on a white background, bold contrast",
        "reference_image": "drawing_minimal_line_art_2.png",
        "src": "/assets/images/dashboard/final_website/Line/drawing_minimal_line_art_2.png"
    },
    {
        "category": "Monochrome & Inkwork",
        "prompt": "a pen and ink portrait of a {subject}, looking straight at the camera, expressive details, fine cross-hatching, strong contrasts, classic technique",
        "reference_image": "drawing_pen_and_ink_portrait.png",
        "src": "/assets/images/dashboard/final_website/Monochrome & Inkwork/drawing_pen_and_ink_portrait.png"
    },
    {
        "category": "Monochrome & Inkwork",
        "prompt": "an African market sketch of a {subject}, looking straight at the camera, intricate linework, rich textures, cultural details, monochromatic tones",
        "reference_image": "drawing_african_market_sketch.png",
        "src": "/assets/images/dashboard/final_website/Monochrome & Inkwork/drawing_african_market_sketch.png"
    },
    {
        "category": "Monochrome & Inkwork",
        "prompt": "a bromoil print of a {subject}, looking straight at the camera, monochromatic tones, soft textures, grainy details, vintage aesthetic",
        "reference_image": "drawing_bromoil_print.png",
        "src": "/assets/images/dashboard/final_website/Monochrome & Inkwork/drawing_bromoil_print.png"
    },
    {
        "category": "Monochrome & Inkwork",
        "prompt": "An ink drawing of a {subject}, looking straight at the camera, intricate lines, monochromatic tones, dynamic flow, artistic splatters.",
        "reference_image": "drawing_ink_drawing.png",
        "src": "/assets/images/dashboard/final_website/Monochrome & Inkwork/drawing_ink_drawing.png"
    },
    {
        "category": "Monochrome & Inkwork",
        "prompt": "a pencil drawing of a {subject}, looking straight at camera, fine pencil strokes, realistic textures, high contrast, intricate details",
        "reference_image": "drawing_realistic_pencil_sketch.png",
        "src": "/assets/images/dashboard/final_website/Monochrome & Inkwork/drawing_realistic_pencil_sketch.png"
    },
    {
        "category": "Monochrome & Inkwork",
        "prompt": "an illustration of a {subject}, looking straight at the camera, intricate linework, whimsical design, monochromatic palette, playful details",
        "reference_image": "illustration_whimsical_line_art.png",
        "src": "/assets/images/dashboard/final_website/Monochrome & Inkwork/illustration_whimsical_line_art.png"
    },
    {
        "category": "Monochrome & Inkwork",
        "prompt": "A lithographic print of a {subject}, looking straight at the camera, intricate textures, monochromatic tones, bold contrasts, handcrafted details.",
        "reference_image": "printmaking_lithographic_print.png",
        "src": "/assets/images/dashboard/final_website/Monochrome & Inkwork/printmaking_lithographic_print.png"
    },
    {
        "category": "Monochrome & Inkwork",
        "prompt": "A Scraperboard Art style print of a {subject}, looking straight at the camera.",
        "reference_image": "printmaking_scraperboard_art.png",
        "src": "/assets/images/dashboard/final_website/Monochrome & Inkwork/printmaking_scraperboard_art.png"
    },
    {
        "category": "Monochrome & Inkwork",
        "prompt": "A Scratchboard Art style print of a {subject}, looking straight at the camera.",
        "reference_image": "printmaking_scratchboard_art.png",
        "src": "/assets/images/dashboard/final_website/Monochrome & Inkwork/printmaking_scratchboard_art.png"
    },
    {
        "category": "Painting",
        "prompt": "a painting of a {subject}, looking straight at the camera, dynamic brushstrokes, intense colors, abstract composition, expressive energy",
        "reference_image": "abstract_expressionism.png",
        "src": "/assets/images/dashboard/final_website/Painting/abstract_expressionism.png"
    },
    {
        "category": "Painting",
        "prompt": "a painting of a {subject}, looking straight at the camera, thick impasto, bold brushstrokes, dramatic textures, vibrant contrast",
        "reference_image": "Frank_Auerbach_v6.png",
        "src": "/assets/images/dashboard/final_website/Painting/Frank_Auerbach_v6.png"
    },
    {
        "category": "Painting",
        "prompt": "an abstract expressionist painting of a {subject}, looking straight at the camera, bold brushstrokes, vibrant colors, textured layers, expressive details",
        "reference_image": "painting_abstract_expressionism.png",
        "src": "/assets/images/dashboard/final_website/Painting/painting_abstract_expressionism.png"
    },
    {
        "category": "Painting",
        "prompt": "an abstract expressionist portrait of a {subject}, looking straight at the camera, bold brushstrokes, vibrant colors, expressive texture, emotional depth",
        "reference_image": "painting_abstract_expressionist_portrait.png",
        "src": "/assets/images/dashboard/final_website/Painting/painting_abstract_expressionist_portrait.png"
    },
    {
        "category": "Painting",
        "prompt": "An impressionist painting of a {subject}, looking straight at the camera, vibrant colors, dynamic brushstrokes, lively atmosphere, rich textures.",
        "reference_image": "painting_colorful_impressionism.png",
        "src": "/assets/images/dashboard/final_website/Painting/painting_colorful_impressionism.png"
    },
    {
        "category": "Painting",
        "prompt": "a contemporary impasto portrait of a {subject}, looking straight at the camera, thick brushstrokes, rich textures, dramatic lighting, bold contrasts",
        "reference_image": "painting_contemporary_impasto_portrait.png",
        "src": "/assets/images/dashboard/final_website/Painting/painting_contemporary_impasto_portrait.png"
    },
    {
        "category": "Painting",
        "prompt": "An expressionist painting of a {subject}, looking straight at the camera, bold and dynamic brushstrokes, vivid colors, abstracted forms, emotional intensity.",
        "reference_image": "painting_expressionism.png",
        "src": "/assets/images/dashboard/final_website/Painting/painting_expressionism.png"
    },
    {
        "category": "Painting",
        "prompt": "a painting of a {subject}, looking straight at camera, bold brushstrokes, vibrant colors, emotional intensity, dynamic composition",
        "reference_image": "painting_expressionism_2.png",
        "src": "/assets/images/dashboard/final_website/Painting/painting_expressionism_2.png"
    },
    {
        "category": "Painting",
        "prompt": "An Expressionist Portraits style painting of a {subject}, looking straight at the camera.",
        "reference_image": "painting_expressionist_portraits.png",
        "src": "/assets/images/dashboard/final_website/Painting/painting_expressionist_portraits.png"
    },
    {
        "category": "Painting",
        "prompt": "A fauvist painting of a {subject}, looking straight at the camera, bold colors, strong contrasts, simplified shapes, raw emotional depth.",
        "reference_image": "painting_fauvism.png",
        "src": "/assets/images/dashboard/final_website/Painting/painting_fauvism.png"
    },
    {
        "category": "Painting",
        "prompt": "An impasto painting of a {subject}, looking straight at the camera, thick textured strokes, vibrant colors, expressive details, bold contrasts.",
        "reference_image": "painting_impasto_painting.png",
        "src": "/assets/images/dashboard/final_website/Painting/painting_impasto_painting.png"
    },
    {
        "category": "Painting_1",
        "prompt": "a painting of a {subject}, looking straight at the camera, expressive brushstrokes, muted tones, textured layers, raw emotion",
        "reference_image": "expressionist_portraiture.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/expressionist_portraiture.png"
    },
    {
        "category": "Painting_1",
        "prompt": "a painting of a {subject}, looking straight at the camera, raw emotion, detailed facial expressions, muted tones, expressive brushwork",
        "reference_image": "Fear_v6.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/Fear_v6.png"
    },
    {
        "category": "Painting_1",
        "prompt": "a painting of a {subject}, looking straight at the camera, haunting tones, distorted features, surreal composition, evocative mood",
        "reference_image": "Francis_Bacon_v6.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/Francis_Bacon_v6.png"
    },
    {
        "category": "Painting_1",
        "prompt": "An Expressionist Illustration style drawing of a {subject}, looking straight at the camera.",
        "reference_image": "illustration_expressionist_illustration.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/illustration_expressionist_illustration.png"
    },
    {
        "category": "Painting_1",
        "prompt": "An abstract expressionist painting of a {subject}, looking straight at the camera, bold and colorful brushstrokes, layered textures, expressive and emotional tones.",
        "reference_image": "painting_abstract_expressionism_2.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_abstract_expressionism_2.png"
    },
    {
        "category": "Painting_1",
        "prompt": "An Abstract Expressionism style painting of a {subject}, looking straight at the camera.",
        "reference_image": "painting_abstract_expressionism_3.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_abstract_expressionism_3.png"
    },
    {
        "category": "Painting_1",
        "prompt": "An emotive monochrome portrait painting of a {subject}, looking straight at the camera, expressive brushstrokes, muted tones, emotional depth, minimal color palette.",
        "reference_image": "painting_emotive_monochrome_portraiture.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_emotive_monochrome_portraiture.png"
    },
    {
        "category": "Painting_1",
        "prompt": "an impressionist painting of a {subject}, looking straight at the camera, vibrant brushstrokes, vivid colors, serene seascape, natural light",
        "reference_image": "painting_impressionist_seascape.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_impressionist_seascape.png"
    },
    {
        "category": "Painting_1",
        "prompt": "an impressionist seascape painting of a {subject}, looking straight at the camera, vibrant brushstrokes, rich colors, dynamic composition, natural light",
        "reference_image": "painting_impressionist_seascape_2.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_impressionist_seascape_2.png"
    },
    {
        "category": "Painting_1",
        "prompt": "A modern expressive portrait painting of a {subject}, looking straight at the camera, bold brushstrokes, abstract background, vivid colors, emotional intensity.",
        "reference_image": "painting_modern_expressive_portraiture.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_modern_expressive_portraiture.png"
    },
    {
        "category": "Painting_1",
        "prompt": "A modern impressionistic painting of a {subject}, looking straight at the camera, bold strokes, soft lighting, vibrant colors, impressionistic details.",
        "reference_image": "painting_modern_impressionism.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_modern_impressionism.png"
    },
    {
        "category": "Painting_1",
        "prompt": "A modern portrait painting of a {subject}, looking straight at the camera, bold colors, abstract accents, expressive brushstrokes, layered textures.",
        "reference_image": "painting_modern_portraiture.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_modern_portraiture.png"
    },
    {
        "category": "Painting_1",
        "prompt": "a neo-expressionist illustration of a {subject}, looking straight at the camera, dynamic brushstrokes, vibrant colors, bold contrasts, textured layers",
        "reference_image": "painting_neo-expressionist_illustration.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_neo-expressionist_illustration.png"
    },
    {
        "category": "Painting_1",
        "prompt": "a painting of a {subject}, looking straight at camera, textured brushstrokes, harmonious colors, structured forms, impressionistic lighting",
        "reference_image": "painting_post-impressionism.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_post-impressionism.png"
    },
    {
        "category": "Painting_1",
        "prompt": "a post-impressionist painting of a {subject}, looking straight at the camera, vivid colors, bold brushstrokes, serene composition, natural lighting",
        "reference_image": "painting_post-impressionist_landscape.png",
        "src": "/assets/images/dashboard/final_website/Painting_1/painting_post-impressionist_landscape.png"
    },
    {
        "category": "Painting_2",
        "prompt": "a painting of a {subject}, looking straight at camera, expressive brushstrokes, vibrant colors, atmospheric composition, abstract elements",
        "reference_image": "painting_contemporary_landscape.png",
        "src": "/assets/images/dashboard/final_website/Painting_2/painting_contemporary_landscape.png"
    },
    {
        "category": "Painting_2",
        "prompt": "A contemporary realist painting of a {subject}, looking straight at the camera, detailed brushwork, muted tones, everyday scenes, emotional depth.",
        "reference_image": "painting_contemporary_realism.png",
        "src": "/assets/images/dashboard/final_website/Painting_2/painting_contemporary_realism.png"
    },
    {
        "category": "Painting_2",
        "prompt": "an expressionist painting of a {subject}, looking straight at the camera, bold brushstrokes, emotional tones, vibrant yet somber colors, distorted perspectives",
        "reference_image": "painting_expressionist_painting.png",
        "src": "/assets/images/dashboard/final_website/Painting_2/painting_expressionist_painting.png"
    },
    {
        "category": "Painting_2",
        "prompt": "an impressionist painting of a {subject}, looking straight at the camera, delicate brushstrokes, soft lighting, urban scenery, nostalgic atmosphere",
        "reference_image": "painting_impressionist_cityscape.png",
        "src": "/assets/images/dashboard/final_website/Painting_2/painting_impressionist_cityscape.png"
    },
    {
        "category": "Painting_2",
        "prompt": "an impressionist painting of a {subject}, looking straight at the camera, soft brushstrokes, moody lighting, detailed urban landscape, rich textures",
        "reference_image": "painting_impressionist_urban_scene.png",
        "src": "/assets/images/dashboard/final_website/Painting_2/painting_impressionist_urban_scene.png"
    },
    {
        "category": "Painting_2",
        "prompt": "a romantic noir painting of a {subject}, looking straight at the camera, moody lighting, soft textures, dramatic tones, intimate atmosphere",
        "reference_image": "painting_romantic_noir_painting.png",
        "src": "/assets/images/dashboard/final_website/Painting_2/painting_romantic_noir_painting.png"
    },
    {
        "category": "Pop",
        "prompt": "a digital portrait of a {subject}, looking straight at the camera, detailed shading, vibrant contrasts, expressive features, stylized realism",
        "reference_image": "digital_art_digital_portrait_2.jpg",
        "src": "/assets/images/dashboard/final_website/Pop/digital_art_digital_portrait_2.png"
    },
    {
        "category": "Pop",
        "prompt": "A Pop Art style painting of a {subject}, looking straight at the camera.",
        "reference_image": "modern_art_pop_art.png",
        "src": "/assets/images/dashboard/final_website/Pop/modern_art_pop_art.png"
    },
    {
        "category": "Pop",
        "prompt": "a pop art style painting of a {subject}, looking straight at the camera, bold colors, graphic lines, vintage textures, expressive features",
        "reference_image": "painting_pop_art.png",
        "src": "/assets/images/dashboard/final_website/Pop/painting_pop_art.png"
    },
    {
        "category": "Pop",
        "prompt": "A pop art-inspired illustration of a {subject}, looking straight at the camera with neon-colored accents and a dynamic gradient background.",
        "reference_image": "pop_art_portrait.jpg",
        "src": "/assets/images/dashboard/final_website/Pop/pop_art_portrait.png"
    },
    {
        "category": "Portrait",
        "prompt": "a digital portrait of a {subject}, looking straight at the camera, soft brushstrokes, realistic textures, muted tones, expressive style",
        "reference_image": "digital_art_digital_portrait.jpg",
        "src": "/assets/images/dashboard/final_website/Portrait/digital_art_digital_portrait.png"
    },
    {
        "category": "Portrait",
        "prompt": "An HDR photograph of a {subject}, looking straight at the camera, high dynamic range, vibrant lighting, dramatic contrasts, rich textures.",
        "reference_image": "photography_hdr_photography.png",
        "src": "/assets/images/dashboard/final_website/Portrait/photography_hdr_photography.png"
    },
    {
        "category": "Portrait",
        "prompt": "A neo-noir photograph of a {subject}, looking straight at the camera, neon lighting, dramatic shadows, urban setting, reflective surfaces, cinematic atmosphere.",
        "reference_image": "photography_neo-noir_photography.png",
        "src": "/assets/images/dashboard/final_website/Portrait/photography_neo-noir_photography.png"
    },
    {
        "category": "Retro",
        "prompt": "a digital artwork of a {subject}, looking straight at the camera, retro-futuristic aesthetic, muted colors, detailed environments, sci-fi atmosphere",
        "reference_image": "digital_art_retro-futuristic.png",
        "src": "/assets/images/dashboard/final_website/Retro/digital_art_retro-futuristic.png"
    },
    {
        "category": "Retro",
        "prompt": "A Pulp Art style illustration of a {subject}, looking straight at the camera.",
        "reference_image": "illustration_pulp_art.png",
        "src": "/assets/images/dashboard/final_website/Retro/illustration_pulp_art.png"
    },
    {
        "category": "Scenic Illustration",
        "prompt": "a digital painting of a {subject}, looking straight at camera, surreal landscapes, vibrant neon colors, futuristic elements, imaginative composition",
        "reference_image": "digital_art_futurism.png",
        "src": "/assets/images/dashboard/final_website/Scenic Illustration/digital_art_futurism.png"
    },
    {
        "category": "Scenic Illustration",
        "prompt": "A Redscale style digital art of a {subject}, looking straight at the camera.",
        "reference_image": "digital_art_redscale.png",
        "src": "/assets/images/dashboard/final_website/Scenic Illustration/digital_art_redscale.png"
    },
    {
        "category": "Scenic Illustration",
        "prompt": "A golden age-style illustration of a {subject}, looking straight at the camera, surreal landscapes, vibrant yet soft tones, intricate lighting, classic and timeless aesthetic.",
        "reference_image": "illustration_golden_age_illustration.png",
        "src": "/assets/images/dashboard/final_website/Scenic Illustration/illustration_golden_age_illustration.png"
    },
    {
        "category": "Scenic Illustration",
        "prompt": "an impressionist painting of a {subject} looking straight at the camera, featuring a peaceful riverside scene with soft, glowing light.",
        "reference_image": "impressionist_landscape.png",
        "src": "/assets/images/dashboard/final_website/Scenic Illustration/impressionist_landscape.png"
    },
    {
        "category": "Scenic Illustration",
        "prompt": "An impressionist painting of a {subject}, looking straight at the camera, warm tones, soft lighting, textured brushwork, cozy ambiance.",
        "reference_image": "painting_impressionist_interiors.png",
        "src": "/assets/images/dashboard/final_website/Scenic Illustration/painting_impressionist_interiors.png"
    },
    {
        "category": "Scenic Illustration",
        "prompt": "a realistic landscape painting of a {subject}, looking straight at the camera, vibrant colors, detailed scenery, natural lighting, serene atmosphere",
        "reference_image": "painting_realistic_landscape_painting.png",
        "src": "/assets/images/dashboard/final_website/Scenic Illustration/painting_realistic_landscape_painting.png"
    },
    {
        "category": "Sculpture",
        "prompt": "a figurine of a {subject}, looking straight at the camera, placed under warm spotlight lighting.",
        "reference_image": "realistic_figurine_photography.png",
        "src": "/assets/images/dashboard/final_website/Sculpture/realistic_figurine_photography.png"
    },
    {
        "category": "Sculpture",
        "prompt": "a carnival glass sculpture of a {subject}, looking straight at the camera, iridescent finish, intricate details, reflective textures, vibrant colors",
        "reference_image": "sculpture_carnival_glass_sculpture.png",
        "src": "/assets/images/dashboard/final_website/Sculpture/sculpture_carnival_glass_sculpture.png"
    },
    {
        "category": "Sculpture",
        "prompt": "a claymation sculpture of a {subject}, looking straight at camera, colorful textures, handmade look, vibrant clay details, whimsical composition",
        "reference_image": "sculpture_claymation.png",
        "src": "/assets/images/dashboard/final_website/Sculpture/sculpture_claymation.png"
    },
    {
        "category": "Sculpture",
        "prompt": "a diorama sculpture of a {subject}, looking straight at the camera, intricate details, realistic textures, layered composition, immersive atmosphere",
        "reference_image": "sculpture_diorama_sculpture.png",
        "src": "/assets/images/dashboard/final_website/Sculpture/sculpture_diorama_sculpture.png"
    },
    {
        "category": "Sculpture",
        "prompt": "a sculpture of a {subject}, looking straight at the camera, marble texture, iridescent lighting, smooth details, classical proportions",
        "reference_image": "sculpture_iridescent_bust_sculpture.png",
        "src": "/assets/images/dashboard/final_website/Sculpture/sculpture_iridescent_bust_sculpture.png"
    },
    {
        "category": "Sculpture",
        "prompt": "A Terracotta Sculpture style sculpture of a {subject}, looking straight at the camera.",
        "reference_image": "sculpture_terracotta_sculpture.png",
        "src": "/assets/images/dashboard/final_website/Sculpture/sculpture_terracotta_sculpture.png"
    },
    {
        "category": "Sketch",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "academic_doodle_style.png",
        "src": "/assets/images/dashboard/final_website/Sketch/academic_doodle_style.png"
    },
    {
        "category": "Sketch",
        "prompt": "A cheerful, cartoon-style drawing of a {subject}, looking straight at the camera.",
        "reference_image": "cartoon_illustration_group.png",
        "src": "/assets/images/dashboard/final_website/Sketch/cartoon_illustration_group.png"
    },
    {
        "category": "Sketch",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "city_police_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Sketch/city_police_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "coastal_cabin_sketch.png",
        "src": "/assets/images/dashboard/final_website/Sketch/coastal_cabin_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "A pencil drawing of a {subject}, looking straight at the camera.",
        "reference_image": "courtroom_realism_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Sketch/courtroom_realism_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "cute_animal_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Sketch/cute_animal_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "a scratchy pen sketch of a {subject}, looking straight at the camera, expressive linework, heavy contrast, textured shading, dynamic strokes",
        "reference_image": "drawing_scratchy_pen_sketch.png",
        "src": "/assets/images/dashboard/final_website/Sketch/drawing_scratchy_pen_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "A sketch drawing of a {subject}, looking straight at the camera, loose lines, expressive shading, dynamic composition, fine details.",
        "reference_image": "drawing_sketch_art.png",
        "src": "/assets/images/dashboard/final_website/Sketch/drawing_sketch_art.png"
    },
    {
        "category": "Sketch",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "dynamic_lion_sketch.png",
        "src": "/assets/images/dashboard/final_website/Sketch/dynamic_lion_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "a hand-drawn sketch of a {subject}, looking straight at the camera, rough pencil strokes, expressive details, minimal shading, clean composition",
        "reference_image": "illustration_hand-drawn_character_sketch.png",
        "src": "/assets/images/dashboard/final_website/Sketch/illustration_hand-drawn_character_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "Detailed professional sketch of a {subject}, looking straight at the camera.",
        "reference_image": "legal_profession_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Sketch/legal_profession_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "a {subject}'s sketch, looking straight at the camera.",
        "reference_image": "mechanical_surrealism_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Sketch/mechanical_surrealism_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "mystical_lion_sketch.png",
        "src": "/assets/images/dashboard/final_website/Sketch/mystical_lion_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "realistic_animal_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Sketch/realistic_animal_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "Black and white ink sketch on thick white paper of a {subject}, looking straight at the camera.",
        "reference_image": "realistic_pencil_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Sketch/realistic_pencil_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "a sketch of a {subject}, looking straight at the camera, charcoal strokes, monochrome palette, bold lines, textured shading",
        "reference_image": "sketch_cute.png",
        "src": "/assets/images/dashboard/final_website/Sketch/sketch_cute.png"
    },
    {
        "category": "Sketch",
        "prompt": "a hand-drawn sketch of a {subject}, looking straight at the camera, detailed lines, minimalist shading, textured pencil strokes, realistic proportions",
        "reference_image": "sketch_hand-drawn_sketch.jpg",
        "src": "/assets/images/dashboard/final_website/Sketch/sketch_hand-drawn_sketch.png"
    },
    {
        "category": "Sketch",
        "prompt": "A sketch style of {subject}, looking straight at the camera.",
        "reference_image": "student_caricature.jpg",
        "src": "/assets/images/dashboard/final_website/Sketch/student_caricature.png"
    },
    {
        "category": "Watercolor",
        "prompt": "a watercolor illustration of a {subject}, looking straight at the camera.",
        "reference_image": "abstract_watercolor_illustration.jpg",
        "src": "/assets/images/dashboard/final_website/Watercolor/abstract_watercolor_illustration.png"
    },
    {
        "category": "Watercolor",
        "prompt": "a watercolor and pencil crayon illustration of a {subject}, looking straight at the camera, delicate strokes, soft transitions, vibrant colors, hand-drawn feel",
        "reference_image": "illustration_watercolor_and_pencil_crayons.png",
        "src": "/assets/images/dashboard/final_website/Watercolor/illustration_watercolor_and_pencil_crayons.png"
    },
    {
        "category": "Watercolor",
        "prompt": "a watercolor illustration of a {subject}, looking straight at the camera, soft brushstrokes, pastel colors, minimalistic details, delicate composition",
        "reference_image": "illustration_watercolor_animal_illustration.png",
        "src": "/assets/images/dashboard/final_website/Watercolor/illustration_watercolor_animal_illustration.png"
    },
    {
        "category": "Watercolor",
        "prompt": "an ink and watercolor portrait of a {subject}, looking straight at the camera, delicate lines, splattered textures, soft gradients, fluid brushstrokes",
        "reference_image": "painting_ink_and_watercolor_portrait.png",
        "src": "/assets/images/dashboard/final_website/Watercolor/painting_ink_and_watercolor_portrait.png"
    }
]

const paint_bulk_data = [
    {
        "category": "Bulk_1",
        "prompt": "a 3D rendered character of a {subject}, looking straight at the camera, formal attire, detailed rendering, clean white background, realistic features",
        "reference_image": "3d_rendering_3d_rendered_character.jpg",
        "src": "/assets/images/dashboard/bulk/Bulk_1/3d_rendering_3d_rendered_character.png"
    },
    {
        "category": "Bulk_1",
        "prompt": "A Textured Puppetry style art of a {subject}, looking straight at the camera.",
        "reference_image": "craft_textured_puppetry.png",
        "src": "/assets/images/dashboard/bulk/Bulk_1/craft_textured_puppetry.png"
    },
    {
        "category": "Bulk_1",
        "prompt": "a 3D cartoon illustration of a {subject}, watching a movie, stylized proportions, smooth textures, vibrant colors, clean lines",
        "reference_image": "illustration_3d_cartoon_illustration.jpg",
        "src": "/assets/images/dashboard/bulk/Bulk_1/illustration_3d_cartoon_illustration.png"
    },
    {
        "category": "Bulk_1",
        "prompt": "a 3D cartoon illustration of a {subject}, looking straight at the camera, cozy interior, warm tones, detailed textures, expressive character design",
        "reference_image": "illustration_3d_cartoon_with_pet.jpg",
        "src": "/assets/images/dashboard/bulk/Bulk_1/illustration_3d_cartoon_with_pet.png"
    },
    {
        "category": "Bulk_1",
        "prompt": "a 3D cartoon illustration of a {subject}, looking straight at the camera, detailed rendering, vibrant lighting, soft textures, expressive style",
        "reference_image": "illustration_3d_cartoon_with_pet_2.jpg",
        "src": "/assets/images/dashboard/bulk/Bulk_1/illustration_3d_cartoon_with_pet_2.png"
    },
    {
        "category": "Bulk_1",
        "prompt": "a cartoon portrait of a {subject}, looking straight at the camera, detailed facial features, textured shading, warm color palette, stylized realism",
        "reference_image": "illustration_cartoon_portrait.jpg",
        "src": "/assets/images/dashboard/bulk/Bulk_1/illustration_cartoon_portrait.png"
    },
    {
        "category": "Bulk_1",
        "prompt": "A whimsical muppet-style illustration of a {subject}, looking straight at the camera, vibrant colors, playful textures, expressive features, comedic tone.",
        "reference_image": "illustration_muppet_character_portraits.png",
        "src": "/assets/images/dashboard/bulk/Bulk_1/illustration_muppet_character_portraits.png"
    },
    {
        "category": "Bulk_2",
        "prompt": "an anime-style cityscape illustration of a {subject}, looking straight at the camera, vibrant colors, detailed architecture, dynamic lighting, lively urban atmosphere",
        "reference_image": "digital_art_anime_cityscape_illustration.jpg",
        "src": "/assets/images/dashboard/bulk/Bulk_2/digital_art_anime_cityscape_illustration.png"
    },
    {
        "category": "Bulk_2",
        "prompt": "a 1990s anime-style illustration of a {subject}, looking straight at the camera, clean lines, vibrant colors, retro shading, detailed background",
        "reference_image": "illustration_1990s_anime.png",
        "src": "/assets/images/dashboard/bulk/Bulk_2/illustration_1990s_anime.png"
    },
    {
        "category": "Bulk_2",
        "prompt": "A neo-noir graphic illustration of a {subject}, looking straight at the camera, bold outlines, muted yet dramatic colors, urban environments, cinematic composition.",
        "reference_image": "illustration_neo-noir_graphic_art.png",
        "src": "/assets/images/dashboard/bulk/Bulk_2/illustration_neo-noir_graphic_art.png"
    },
    {
        "category": "Bulk_2",
        "prompt": "a realistic anime-style portrait of a {subject}, looking straight at the camera, soft shading, vibrant colors, detailed background, expressive features",
        "reference_image": "illustration_realistic_anime_portrait.png",
        "src": "/assets/images/dashboard/bulk/Bulk_2/illustration_realistic_anime_portrait.png"
    },
    {
        "category": "Bulk_3",
        "prompt": "a cartoon illustration of a {subject}, looking straight at the camera, playful lines, vibrant colors, exaggerated features, soft textures",
        "reference_image": "drawing_cartoon_illustration.png",
        "src": "/assets/images/dashboard/bulk/Bulk_3/drawing_cartoon_illustration.png"
    },
    {
        "category": "Bulk_4",
        "prompt": "A charcoal portrait of {subject} in the style of Leonardo da Vinci, looking straight at the camera.",
        "reference_image": "charcoal_portrait_1.png",
        "src": "/assets/images/dashboard/bulk/Bulk_4/charcoal_portrait_1.png"
    },
    {
        "category": "Bulk_4",
        "prompt": "A classical charcoal portrait of a renaissance noble in the style of Rembrandt, looking straight at the camera.",
        "reference_image": "charcoal_portrait_2.png",
        "src": "/assets/images/dashboard/bulk/Bulk_4/charcoal_portrait_2.png"
    },
    {
        "category": "Bulk_4",
        "prompt": "a charcoal portrait of a {subject}, looking straight at the camera, rough textures, bold contrasts, fine details, dramatic shadows",
        "reference_image": "drawing_charcoal_portrait.png",
        "src": "/assets/images/dashboard/bulk/Bulk_4/drawing_charcoal_portrait.png"
    },
    {
        "category": "Bulk_4",
        "prompt": "A charcoal portrait of a {subject}, looking straight at the camera.",
        "reference_image": "introspective_charcoal_art.jpg",
        "src": "/assets/images/dashboard/bulk/Bulk_4/introspective_charcoal_art.png"
    },
]

export const paint_categories = [
    "3d",
    "Anime",
    "cartoon",
    "charcoal",
    "Comic",
    "Concept Art",
    "Fantasy",
    "Genifyl",
    "Illustration",
    "Ink",
    "Line",
    "Monochrome & Inkwork",
    "Painting",
    "Painting_1",
    "Painting_2",
    "Pop",
    "Portrait",
    "Retro",
    "Scenic Illustration",
    "Sculpture",
    "Sketch",
    "Watercolor"
];

export const paint_bulk_categories = [
    "Bulk_1",
    "Bulk_2",
    "Bulk_3",
    "Bulk_4",
];


export const filterPaintingsByCategory = (category) => {
    return paint_data.filter(item => item.category.toLowerCase() === category.toLowerCase());
};

export const filterPaintingsBulkDataByCategory = (category) => {
    return paint_bulk_data.filter(item => item.category.toLowerCase() === category.toLowerCase());
};