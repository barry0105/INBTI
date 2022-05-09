package com.inbti.board.springboot.service.posts;

import com.inbti.board.springboot.domain.posts.PostsRepository;
import com.inbti.board.springboot.web.dto.PostsSaveRequestDto;
import lombok.RequiredArgsConstructor;

import javax.transaction.Transactional;

@RequiredArgsConstructor
public class PostsService {
    private final PostsRepository postsRepository;

    @Transactional
    public long save(PostsSaveRequestDto requestDto){
        return postsRepository.save(requestDto.toEntity()).getId();
    }
}
