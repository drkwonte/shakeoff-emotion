import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmotionInputProps {
  onBurn: (text: string, tags: string[]) => void;
}

const EMOTION_TAGS = ['분노', '우울', '불안', '자책', '억울함', '짜증', '외로움'];

const EmotionInput: React.FC<EmotionInputProps> = ({ onBurn }) => {
  const [text, setText] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const isReadyToBurn = text.trim().length >= 10;

  const handleBurnClick = () => {
    if (isReadyToBurn) {
      setIsDialogOpen(true);
    }
  };

  const confirmBurn = () => {
    setIsDialogOpen(false);
    onBurn(text, selectedTags);
  };

  return (
    <div className="w-full max-w-4xl flex flex-col space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-medium text-neutral-200 text-center leading-tight">
          지우고 싶은 사건이나 감정을 털어놓아 보세요.<br />
          제가 들어드릴게요.
        </h2>
        <div className="relative group">
          {/* Paper / Parchment Styling */}
          <div className="absolute -inset-1 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <Textarea
            placeholder={"이곳에 모든 것을 쏟아내세요.\n아무도 보지 못합니다..."}

            className="relative min-h-[500px] bg-[#f4f1ea] border-none text-neutral-800 text-lg md:text-xl resize-none p-12 shadow-2xl focus-visible:ring-0 transition-all placeholder:text-neutral-400 font-serif leading-relaxed text-center"
            style={{
              borderRadius: '2px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.6), inset 0 0 80px rgba(0,0,0,0.05)'
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* Corner fold effect (optional, subtle) */}
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-neutral-300 to-transparent opacity-20 pointer-events-none"></div>
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <Button
          size="xl"
          disabled={!isReadyToBurn}
          onClick={handleBurnClick}
          className={`group relative overflow-hidden rounded-full px-12 py-8 text-xl font-bold transition-all duration-500 ${
            isReadyToBurn 
              ? 'bg-orange-600 text-white hover:bg-orange-700 hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)]' 
              : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            <Flame className={`${isReadyToBurn ? 'animate-pulse text-yellow-300' : ''}`} />
            불태우기
          </span>
          {isReadyToBurn && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-neutral-900 border-neutral-800 text-white max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">정말 불태우시겠습니까?</DialogTitle>
            <DialogDescription className="text-neutral-400 text-center pt-2">
              한 번 불태우면 절대 되돌릴 수 없습니다.<br />
              당신의 힘든 기억을 완전히 삭제합니다.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center gap-3 sm:justify-center pt-4">
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
              className="border-neutral-700 text-neutral-400 hover:bg-neutral-800 hover:text-white"
            >
              취소
            </Button>
            <Button 
              onClick={confirmBurn}
              className="bg-orange-600 hover:bg-orange-700 text-white border-none"
            >
              네, 불태워주세요
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmotionInput;
