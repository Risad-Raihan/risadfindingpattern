import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { motion } from "framer-motion"

interface Comment {
  id: string
  name: string
  content: string
  timestamp: string
}

interface EngagementProps {
  postId: string
  initialLikes?: number
  initialComments?: Comment[]
}

export function Engagement({ postId, initialLikes = 0, initialComments = [] }: EngagementProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [hasLiked, setHasLiked] = useState(false)
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1)
      setHasLiked(true)
      // TODO: Implement API call to store like
    }
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !comment.trim()) return

    setIsSubmitting(true)
    
    // Create new comment
    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      content: comment,
      timestamp: new Date().toISOString()
    }

    // TODO: Implement API call to store comment
    
    // Update local state
    setComments(prev => [newComment, ...prev])
    setName("")
    setComment("")
    setIsSubmitting(false)
  }

  return (
    <div className="space-y-8">
      {/* Likes */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className={`group ${hasLiked ? 'text-red-500 hover:text-red-600' : 'hover:text-red-500'}`}
          onClick={handleLike}
          disabled={hasLiked}
        >
          <Heart className={`h-5 w-5 mr-2 ${hasLiked ? 'fill-current' : 'group-hover:fill-current'}`} />
          {likes} {likes === 1 ? 'Like' : 'Likes'}
        </Button>
      </div>

      {/* Comment Form */}
      <Card className="p-6">
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div>
            <Input
              placeholder="Your name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Textarea
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="min-h-[100px]"
            />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </Button>
        </form>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">
          {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
        </h3>
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-lg p-4 space-y-2"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{comment.name}</h4>
              <time className="text-sm text-muted-foreground">
                {new Date(comment.timestamp).toLocaleDateString()}
              </time>
            </div>
            <p className="text-muted-foreground">{comment.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 