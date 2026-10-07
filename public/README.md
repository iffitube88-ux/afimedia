# 📸 How to Add Your Actual Photo

## Steps:

1. **Find your photo file:**
   - Go to: `C:\Users\irfan\Downloads\`
   - Find: `509288916_1919635395470473_9043100488638243031_n.jpg`

2. **Copy it to this folder:**
   - Copy the file
   - Paste it into this `public/` folder

3. **Rename it:**
   - Rename the pasted file to: `profile.jpg`

4. **Update the code:**
   - Open file: `src/config.ts`
   - Find this line:
     ```
     export const PROFILE_IMAGE = "https://image.qwenlm.ai/...";
     ```
   - Change it to:
     ```
     export const PROFILE_IMAGE = "/profile.jpg";
     ```

5. **Done!** Your actual photo will now appear on the website.

---

## What the photo affects:
- ✅ Navbar (small avatar next to your name)
- ✅ Hero section (large circular photo with animated ring)
- ✅ About Me section (full-size photo with bio)
- ✅ Contact section (profile card)
- ✅ Footer (small avatar)

All in ONE change — just edit `src/config.ts`!
