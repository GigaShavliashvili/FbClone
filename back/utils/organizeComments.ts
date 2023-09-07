export function organizeComments(comments: any, parentId = null) {
    const result = [];
    for (const comment of comments) {
      if (comment.parentId === parentId) {
        const nestedComments = organizeComments(comments, comment.id);
        if (nestedComments.length > 0) {
          comment.children = nestedComments;
        }
        result.push(comment);
      }
    }
    return result;
  }