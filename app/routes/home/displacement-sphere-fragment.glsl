#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

uniform float time;
varying vec2 vUv;
varying vec3 newPosition;
varying float noise;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// Adjust the blue tone correctly
vec3 adjustBlueTone(vec3 color, float noiseFactor) {
    float blueBoost = 1.5 + noiseFactor * 0.5;  // Increase blue dynamically
    float redReduce = 0.1 - noiseFactor * 0.05; // Reduce red dynamically
    float greenReduce = 0.1 - noiseFactor * 0.05; // Reduce green dynamically

    return vec3(color.r * redReduce, color.g * greenReduce, color.b * blueBoost);
}

void main() {
    #include <clipping_planes_fragment>

    // Generate base color (fixing the UV mapping issue)
    vec3 color = vec3(.8, 5.8, 1.5); // Force pure blue

    // Apply blue shift function
    vec3 finalColors = adjustBlueTone(color, noise);
    finalColors = clamp(finalColors, vec3(0.0), vec3(1.0)); // Ensure valid RGB range

    // Set final fragment color
    vec4 diffuseColor = vec4(finalColors, 1.0);
    
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    vec3 totalEmissiveRadiance = emissive;

    #include <logdepthbuf_fragment>
    #include <map_fragment>
    #include <color_fragment>
    #include <alphamap_fragment>
    #include <alphatest_fragment>
    #include <alphahash_fragment>
    #include <specularmap_fragment>
    #include <normal_fragment_begin>
    #include <normal_fragment_maps>
    #include <emissivemap_fragment>

    // Accumulation
    #include <lights_phong_fragment>
    #include <lights_fragment_begin>
    #include <lights_fragment_maps>
    #include <lights_fragment_end>

    // Modulation
    #include <aomap_fragment>

    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

    #include <envmap_fragment>
    #include <opaque_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    #include <fog_fragment>
    #include <premultiplied_alpha_fragment>
    #include <dithering_fragment>

    gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
